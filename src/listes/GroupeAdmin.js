import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Modal,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import images from "../Images";
import { connect, useDispatch, useSelector } from "react-redux";
import * as actions from "../Redux/Actions/groupActions";
import styles from "../Components/styles";

function GroupeAdminScreen({ navigation}) {
    const groups = useSelector(state => state.groups.groups)
    console.log(groups);
    const dispatch = useDispatch()

    const [list, setList] = useState(groups);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [isModif, setIsModif] = useState(false);
    const [text, setTextName] = useState("");
    
    const addGroups = () => {
        list.push({ title: `${text}` });
        setList(list);
        // alert("groupe ajouté")
        setModalVisible2(!modalVisible2);
        dispatch({ type: actions.addGroup({title : `${text}`}).type })
    };
    
    const deleteGroups = (index) => {
        list.splice(index, 1);
        setList(list);
        setModalVisible(!modalVisible);
        dispatch({ type: actions.deleteGroup(index).type })
    };
    
    const editGroups = () => {
        list[currentIndex].title = `${text}`
        setModalVisible(!modalVisible);
        setIsModif(false);
    };
    
    const openAdd = () => {
        setModalVisible2(!modalVisible2);
    };
    
    const handleGroup = (index) => {
        setModalVisible(!modalVisible);
        setCurrentIndex(index);
    };
    
    const handleGroupQuit = () => {
        setModalVisible(!modalVisible);
        setIsModif(false);
    };
    
    const renderItem = ({ item, index }) => {
        return (
            <View
                style={{
                    flex: 0.5,
                    flexDirection: "row",
                    marginRight: 10,
                    marginBottom: 10,
                }}
            >
                <Image style={{ width: 70, height: 70 }} source={images.grp} />
                <View
                    style={{ flex: 1, flexDirection: "column", marginLeft: 10 }}
                >
                    <Text style={{ fontWeight: "bold", width: 250 }}>
                        {item.title}
                    </Text>
                    <Text>*dernier message*</Text>
                </View>
                <Text onPress={() => handleGroup(index)}>gerer</Text>
            </View>
        );
    };

    return (
        <View
            style={{
                backgroundColor: "rgba(255, 165, 0, 0.4)",
                flex: 1,
            }}
        >
            <View
                style={{
                    flex: 1,
                    margin: 10,
                }}
            >
                <View style={{ flex: 0.5, margin: 10 }}>
                    <View style={{ alignItems: "center", flex: 2 }}>
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 23,
                                margin: 10,
                            }}
                        >
                            Gérer les groupes
                        </Text>
                        <Text>Administrer et notifier les groupes</Text>
                    </View>

                    <View style={{ margin: 5, flex: 1 }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => openAdd()}
                        >
                            <Text style={{ color: "#fff", fontSize: 20 }}>
                                Ajouter un groupe
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <FlatList
                    style={{ flex: 2, margin: 10 }}
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.title}
                />
            </View>

            <Modal
                //animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.title}>
                    <View style={styles.modalView}>
                        <Text
                            style={styles.btnExit}
                            onPress={() => handleGroupQuit()}
                        >
                            quitter
                        </Text>

                        <Text style={{ fontSize: 25, marginBottom: 20 }}>
                            Gérer
                        </Text>

                        <Text
                            style={{ fontSize: 20 }}
                            onPress={() => setIsModif(!isModif)}
                        >
                            Modifier
                        </Text>

                        {isModif ? (
                            <View>
                                <Text style={{ fontSize: 25 }}>Nom:</Text>

                                <TextInput
                                    style={styles.inputproduit}
                                    placeholder="insérer un nom"
                                    onChangeText={(textName) =>
                                        setTextName(textName)
                                    }
                                >
                                    <Text> {list[currentIndex].title} </Text>
                                </TextInput>

                                <TouchableOpacity
                                    style={styles.btnSubmit}
                                    onPress={() => editGroups()}
                                >
                                    <Text style={{ fontSize: 22 }}>
                                        {" "}
                                        submit{" "}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <Text
                                style={{ fontSize: 20 }}
                                onPress={() => deleteGroups(currentIndex)}
                            >
                                Supprimer
                            </Text>
                        )}
                    </View>
                </View>
            </Modal>

            <Modal
                //animationType="slide"
                transparent={true}
                visible={modalVisible2}
                onRequestClose={() => {
                    setModalVisible2(!modalVisible2);
                }}
            >
                <View style={styles.title}>
                    <View style={styles.modalView}>
                        <Text
                            style={styles.btnExit}
                            onPress={() => setModalVisible2(!modalVisible2)}
                        >
                            quitter
                        </Text>

                        <Text style={{ fontSize: 25, marginBottom: 20 }}>
                            Ajouter
                        </Text>

                        <View>
                            <Text style={{ fontSize: 25 }}>Nom:</Text>

                            <TextInput
                                style={styles.inputproduit}
                                placeholder="insérer un nom"
                                onChangeText={(textName) =>
                                    setTextName(textName)
                                }
                            ></TextInput>

                            <TouchableOpacity
                                style={styles.btnSubmit}
                                onPress={() => addGroups()}
                            >
                                <Text style={{ fontSize: 22 }}> submit </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const mapStateToProps = (state) => ({
    groups: state.groups.groups,
    groupsLoading: state.groups.groupsLoading,
});

export default connect(mapStateToProps, actions)(GroupeAdminScreen);
