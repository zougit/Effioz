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
import { connect } from "react-redux";
import * as actions from "../Redux/Actions/groupActions";

function GroupeAdminScreen({ navigation }) {
    //let groups = this.props.groups;
    const data = [{ title: "grp 1" }, { title: "grp 2" }, { title: "grp 3" }];

    const [list, setList] = useState(data);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [isModif, setIsModif] = useState(false);
    const [text, setTextName] = useState("");

    const addGroup = (name) => {
        list.push({ title: `${name}` });
        setList(list);
        // alert("groupe ajouté")
        setModalVisible2(!modalVisible2);
    };

    const openAdd= () => {
        setModalVisible2(!modalVisible2);
    }

    const deleteGroup = (index) => {
        console.log('deleteGroup', {index});
        list.splice(index, 1);
        setList(list);
        setModalVisible(!modalVisible);
    };

    const handleGroup = (index) => {
        setModalVisible(!modalVisible);
        setCurrentIndex(index);
    };

    const renderItem = ({ item, index }) => {
        console.log({item: item.title, index})
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
            <View style={{ flex: 1, flexDirection: "column", marginLeft: 10 }}>
                <Text style={{ fontWeight: "bold", width: 250 }}>{item.title}</Text>
                <Text>*dernier message*</Text>
            </View>
            <Text onPress={() => handleGroup(index)}>gerer</Text>
        </View>
    )}
    

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
                visible={modalVisible2}
                onRequestClose={() => {
                    setModalVisible2(!modalVisible2);
                }}
            >
                <View style={styles.title}>
                    <View style={styles.modalView}>

                        <Text style={styles.btnExit} onPress={() => setModalVisible2(!modalVisible2)}>
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
                                    onChangeText={(textName) => setTextName(textName)}
                                >
                                </TextInput>

                                <TouchableOpacity
                                    style={styles.btnSubmit}
                                    onPress={() => addGroup(text)}
                                >
                                    <Text style={{ fontSize: 22 }}>
                                        {" "}
                                        submit{" "}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                </View>
            </Modal>

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

                        <Text style={styles.btnExit} onPress={() => handleGroup()}>
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
                                    onChangeText={(textName) => setTextName(textName)}
                                >
                                    <Text> {list[currentIndex].title} </Text>
                                </TextInput>

                                <TouchableOpacity
                                    style={styles.btnSubmit}
                                    onPress={() => alert("Nope")}
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
                                onPress={() => deleteGroup(currentIndex)}
                            >
                                Supprimer
                            </Text>
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#000",
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    button2: {
        backgroundColor: "orange",
        padding: 10,
        marginRight: 5,
    },
    title: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputproduit: {
        justifyContent: "center",
        fontSize: 25,
        backgroundColor: "#CCC",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    btnSubmit: {
        backgroundColor: "rgba(255, 165, 0, 0.7)",
        marginTop: 20,
        marginBottom: -10,
    },
    btnExit: {
        color: "red",
        marginLeft: 80,
        marginTop: -30,
        marginRight: -20,
    },
});

const mapStateToProps = state => ({
    groups: state.groups.groups,
    groupsLoading: state.groups.groupsLoading
})

export default connect(mapStateToProps, actions)(GroupeAdminScreen);