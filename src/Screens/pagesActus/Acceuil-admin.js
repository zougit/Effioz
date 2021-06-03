import * as React from "react";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Modal, Button, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function AccueilAdminScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    const openAcceuil = () => {
        setModalVisible(!modalVisible);
    };

    if (!modalVisible) {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: "row", marginTop: 30 }}>
                    <View
                        style={{ flexDirection: "column", marginBottom: 20 }}
                        onStartShouldSetResponder={() =>
                            alert("met la video en plus grand")
                        }
                    >
                        <Text style={titregauche}>3 questions à</Text>
                        <Text> voir tout </Text>

                        <Image
                            style={styles.video}
                            source={require("C:/Users/Giovanni/Desktop/Effioz/image/image-video.png")}
                        />
                        <Text style={styles.titleAccueil}>Sébastien Bazin</Text>
                        <Text>PDG du groupe Accor</Text>
                    </View>

                    <View
                        style={{
                            flex: 1,
                            flexDirection: "column",
                            marginBottom: 10,
                        }}
                    >
                        <Text style={titredroite}> Prochains webiniaires</Text>
                        <Text
                            style={{ marginLeft: 20 }}
                            onPress={() => navigation.navigate("Webinaire")}
                        >
                            {" "}
                            voir tout{" "}
                        </Text>

                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                marginTop: 10,
                                marginLeft: 20,
                            }}
                            onStartShouldSetResponder={() =>
                                navigation.navigate("Agenda")
                            }
                        >
                            <Image
                                style={styles.imagewebinaire}
                                source={require("C:/Users/Giovanni/Desktop/Effioz/image/image-webinaire.png")}
                            />
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <Text style={{ fontWeight: "bold" }}>
                                    Fleur Pellerin
                                </Text>
                                <Text style={styles.textwebinaire}>
                                    Ex ministre, femme d'affaire passionée de
                                    nouvelles technologies
                                </Text>
                            </View>
                        </View>

                        <Text style={styles.row} />

                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                marginTop: 10,
                                marginLeft: 20,
                            }}
                            onStartShouldSetResponder={() =>
                                navigation.navigate("Agenda")
                            }
                        >
                            <Image
                                style={styles.imagewebinaire}
                                source={require("C:/Users/Giovanni/Desktop/Effioz/image/image-webinaire2.png")}
                            />
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <Text style={{ fontWeight: "bold" }}>
                                    Cédric Villani
                                </Text>
                                <Text style={styles.textwebinaire}>
                                    Ex ministre, femme d'affaire passionée de
                                    nouvelles technologies
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <Text style={styles.titleAccueil}> Actus </Text>
                <Text onPress={() => navigation.navigate("Actus")}>
                    {" "}
                    voir tout{" "}
                </Text>
                <View
                    style={{
                        flex: 0.5,
                        flexDirection: "row",
                        marginRight: 10,
                        marginBottom: 10,
                    }}
                    onStartShouldSetResponder={() =>
                        navigation.navigate("Actu")
                    }
                >
                    <Image
                        style={styles.imageactu}
                        source={require("C:/Users/Giovanni/Desktop/Effioz/image/image-actu.png")}
                    />
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "column",
                            marginLeft: 10,
                        }}
                    >
                        <Text style={{ fontWeight: "bold", width: 250 }}>
                            Comment l'innovation RH transforme l'entreprise...{" "}
                        </Text>
                        <Text style={styles.textactu}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed non risus. Suspendisse lectus tortor,
                        </Text>
                    </View>
                </View>
                <View style={{ backgroundColor: "#000" }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("Grp-Admin")}
                    >
                        <Text style={{ color: "#fff", fontSize: 20 }}>
                            Administrer mes groupes
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.titleAccueil}>Ressources</Text>

                <View style={{ flex: 0.5, flexDirection: "row", marginTop: 5 }}>
                    <View
                        style={{
                            flex: 1.2,
                            flexDirection: "column",
                            marginBottom: 20,
                        }}
                        onStartShouldSetResponder={() =>
                            navigation.navigate("Programme")
                        }
                    >
                        <Text style={titregauche}>Programme</Text>

                        <Text style={styles.textressources}>
                            <Text>Derniers modules</Text>
                            <Text> *inserer 2 dernier</Text>
                            <Text> modules maj*</Text>
                        </Text>
                    </View>

                    <View
                        style={{
                            flex: 1,
                            flexDirection: "column",
                            marginBottom: 10,
                        }}
                        onStartShouldSetResponder={() =>
                            navigation.navigate("Groupes")
                        }
                    >
                        <Text style={titremilieu}> Groupes</Text>

                        <Text style={styles.textressources}>
                            <Text>Derniers Grp actifs</Text>
                        </Text>
                    </View>

                    <View
                        style={{
                            flex: 1,
                            flexDirection: "column",
                            marginBottom: 10,
                        }}
                        onStartShouldSetResponder={() =>
                            navigation.navigate("Ressources")
                        }
                    >
                        <Text style={styles.titleAccueil}> Ressources </Text>

                        <Text style={styles.textressources}>
                            <Text>Dernieres ressources regardées</Text>
                        </Text>
                    </View>
                </View>
            </View>
        );
    } else {
        return (
            <Modal animationType="slide" visible={modalVisible}>
                <View
                    style={{ flex: 1, backgroundColor: "#333" }}
                    onStartShouldSetResponder={() => openAcceuil()}
                >
                    <View style={styles.titleuser}>
                        <Text
                            style={{
                                fontSize: 50,
                                color: "white",
                                fontWeight: "bold",
                            }}
                        >
                            Bonjour user
                        </Text>
                    </View>

                    <View style={styles.contentview}>
                        <Text style={titrecitation}>Citation du jour</Text>
                        <Image
                            style={image}
                            source={require("C:/Users/Giovanni/Desktop/Effioz/image/img-effioz.png")}
                        />
                        <Text style={textperso}>Général Leclerc</Text>
                        <Text style={styles.citation}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed non risus. Suspendisse lectus tortor,
                            dignissim sit amet, adipiscing nec, ultricies sed,
                            dolor. Cras elementum ultrices diam. Maecenas ligula
                            massa, varius a, semper congue, euismod non, mi. "
                        </Text>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
    },

    titleAccueil: {
        color: "orange",
        fontWeight: "bold",
        fontSize: 18,
    },

    titleuser: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginTop: 20,
        marginLeft: 20,
    },

    Right: { marginRight: 45 },
    middle: { marginRight: 30, marginLeft: 10 },
    Left: { marginLeft: 20 },

    contentview: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
    },

    personne: { marginBottom: 20 },

    textenom: {
        fontWeight: "bold",
        fontSize: 20,
        color: "orange",
    },

    citation: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        marginLeft: 70,
        marginRight: 50,
    },

    textwebinaire: {
        width: 130,
        height: 90,
    },

    textressources: {
        width: 110,
        height: 90,
    },

    textactu: {
        width: 230,
        height: 80,
    },

    row: {
        borderBottomColor: "grey",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#000",
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    titrecitation: {
        color: "white",
        fontSize: 23,
        marginBottom: 30,
    },

    image: {
        width: 90,
        height: 90,
        borderRadius: 400 / 2,
    },

    imagewebinaire: {
        width: 70,
        height: 70,
    },

    video: {
        width: 150,
        height: 100,
    },

    imageactu: {
        width: 110,
        height: 110,
    },
});

const titrecitation = StyleSheet.compose(styles.titrecitation, styles.row);
const image = StyleSheet.compose(styles.personne, styles.image);
const textperso = StyleSheet.compose(styles.personne, styles.textenom);
const titregauche = StyleSheet.compose(styles.Right, styles.titleAccueil);
const titredroite = StyleSheet.compose(styles.Left, styles.titleAccueil);
const titremilieu = StyleSheet.compose(styles.middle, styles.titleAccueil);

export default AccueilAdminScreen;
