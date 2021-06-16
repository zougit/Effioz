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
import images from "../images";
import { connect } from "react-redux";
import * as actions from "../Redux/Actions/groupActions";

function GrpAdminScreen({ navigation }) {
    const data = [
        { title: "grp 1" },
        { title: "grp 2" },
        { title: "grp 3" },
    ];
    const [list, setlist] = useState(data);
    const [Index, setindex] = useState(data.length+1);
    const [modalVisible, setModalVisible] = useState(false);
    const [isModif, setisModif] = useState(false);

    const addGroup = () => {
        list.push({ title: `grp ${Index}` });
        setlist(list);
        setindex(Index + 1);
        //alert("groupe ajouté")
    };

    const supprgrp = (index) => {
        list.splice(index, 1);
        setlist(list);
        setindex(Index - 1);
       // setModalVisible(!modalVisible);
    };

    const gerergrp = () => {
        setModalVisible(!modalVisible);
    };

    const Item = ({ title, index }) => (
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
                <Text style={{ fontWeight: "bold", width: 250 }}>{title}</Text>
                <Text>*dernier message*</Text>
            </View>
            <Text onPress={() => gerergrp()}>gerer</Text>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.title}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.btnExit}>quitter</Text>
                        </TouchableOpacity>

                        <Text style={{ fontSize: 25, marginBottom: 20 }}>
                            Gérer
                        </Text>

                        <Text
                            style={{ fontSize: 20 }}
                            onPress={() => setisModif(!isModif)}
                        >
                            Modifier
                        </Text>

                        {isModif ? (
                            <View>
                                <Text style={{ fontSize: 25 }}>Nom:</Text>
                                <TextInput
                                    style={styles.inputproduit}
                                    placeholder="insérer un nom"
                                    //onChangeText={(textName) => setTextName(textName)}
                                >
                                    <Text> {list[index].title} </Text>
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
                                onPress={() => supprgrp(index)}
                            >
                                Supprimer
                            </Text>
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    );
    const renderItem = ({ item, index }) => (
        <Item title={item.title} index={index} />
    );

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

                    <View
                        style={{
                            flexDirection: "row",
                            flex: 1,
                            alignContent: "center",
                            justifyContent: "center",
                            margin: 10,
                        }}
                    >
                        <TouchableOpacity
                            style={styles.button2}
                            onPress={() => alert("ok")}
                        >
                            <Text
                                style={{
                                    color: "#fff",
                                    fontSize: 17,
                                    width: 100,
                                }}
                            >
                                conduite de changement
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button2}
                            onPress={() => alert("ok")}
                        >
                            <Text
                                style={{
                                    color: "#fff",
                                    fontSize: 17,
                                    width: 100,
                                }}
                            >
                                Valorisation d'équipe
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ margin: 5, flex: 1 }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => addGroup()}
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

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actions)(GrpAdminScreen);
