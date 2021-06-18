import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Modal,
    Button,
    Alert,
    Dimensions
} from "react-native";
import {
    ScrollView,
    TouchableWithoutFeedback,
    TouchableOpacity
} from "react-native-gesture-handler";
import Webinaire from "../../Components/webinaire";
import Articleview from "../../Components/articleView";
import Titre from "../../Components/titre";
import Video from "../../Components/video";
import Carousel from "../../Components/carousel";
import Images from "../../Images/index";

const { height, width } = Dimensions.get("window");

function AccueilAdminScreen({ navigation }) {
    const [modalVisible, setModalVisible] = React.useState(true);

    const openAcceuil = () => {
        setModalVisible(!modalVisible);
    };

    if (!modalVisible) {
        return (
            <ScrollView>
                <View style={{ flex: 1, margin: 10 }}>
                    <View style={styles.container}>
                        <Text style={styles.GrandtitreAccueil}>A la une</Text>

                        <Titre
                            name={"Actus"}
                            navigation={navigation}
                            lien={"Actus"}
                        />

                        <Carousel navigation={navigation} />

                        <View
                            style={{
                                marginBottom: 20,
                                flex: 0.7
                            }}
                        >
                            <Titre
                                name={"3 questions à"}
                                navigation={navigation}
                                lien={"Actus"}
                            />

                            <Video
                                source={"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}
                                
                            />

                            <Text style={styles.titleAccueilActu}>
                                Sébastien Bazin
                            </Text>
                            <Text>PDG du groupe Accor</Text>
                        </View>

                        <View
                            style={{
                                flex: 1,
                                flexDirection: "column",
                                marginBottom: 10
                            }}
                        >
                            <Titre
                                name={"Prochains webinaires"}
                                navigation={navigation}
                                lien={"Webinaire"}
                            />

                            <Webinaire
                                name={"Fleur Pellerin"}
                                navigation={navigation}
                                source={Images.webinaire}
                            />

                            <Text style={styles.row} />

                            <Webinaire
                                name={"Cédric Villani"}
                                navigation={navigation}
                                source={Images.webinaire2}
                            />
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

                    <Text style={styles.GrandtitreAccueil}>Ressources</Text>
                    <View
                        style={{
                            backgroundColor: "rgba(255, 165, 0, 0.4)"
                        }}
                    >
                        <View
                            style={{
                                flex: 0.5,
                                flexDirection: "row",
                                marginTop: 5
                            }}
                        >
                            <TouchableWithoutFeedback onPress={() => navigation.navigate("Programme")}>
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: "column",
                                        marginBottom: 10
                                    }}
                                >
                                    <Text style={titregaucheRes}>
                                        Programme
                                    </Text>

                                    <Text style={styles.textressources}>
                                        <Text>Derniers modules</Text>
                                        <Text> *inserer 2 dernier</Text>
                                        <Text> modules maj*</Text>
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => navigation.navigate("Groupes")}>
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: "column",
                                        marginBottom: 10
                                    }}
                                >
                                    <Text style={titremilieuRes}> Groupes</Text>

                                    <Text style={styles.textressources}>
                                        <Text>Derniers Grp actifs</Text>
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => navigation.navigate("Ressources")}>
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: "column",
                                        marginBottom: 10
                                    }}
                                >
                                    <Text style={styles.titleAccueilRes}>
                                        {" "}
                                        Ressources{" "}
                                    </Text>

                                    <Text style={styles.textressources}>
                                        <Text>
                                            Dernieres ressources regardées
                                        </Text>
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
            </ScrollView>
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
                                fontWeight: "bold"
                            }}
                        >
                            Bonjour user
                        </Text>
                    </View>

                    <View style={styles.contentview}>
                        <Text style={titrecitation}>Citation du jour</Text>
                        <Image
                            style={image}
                            source={Images.citation}
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
        justifyContent: "flex-start"
    },

    titleAccueilActu: {
        color: "orange",
        fontWeight: "bold",
        fontSize: 18
    },

    titleAccueilRes: {
        color: "black",
        fontWeight: "bold",
        fontSize: 18
    },

    GrandtitreAccueil: {
        color: "darkorange",
        fontWeight: "bold",
        textDecorationLine: "underline",
        fontSize: 25
    },

    titleuser: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginTop: 20,
        marginLeft: 20
    },

    Right: { marginRight: 45 },
    middle: { marginRight: 30, marginLeft: 10 },

    contentview: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center"
    },

    button: {
        alignItems: "center",
        backgroundColor: "#000",
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    
    personne: { marginBottom: 20 },

    textenom: {
        fontWeight: "bold",
        fontSize: 20,
        color: "orange"
    },

    citation: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        marginLeft: 70,
        marginRight: 50
    },

    textressources: {
        width: 110,
        height: 90
    },

    row: {
        borderBottomColor: "grey",
        borderBottomWidth: StyleSheet.hairlineWidth
    },

    titrecitation: {
        color: "white",
        fontSize: 23,
        marginBottom: 30
    },

    image: {
        width: 90,
        height: 90,
        borderRadius: 400 / 2
    },

    video: {
        width: width - 20,
        height: 210
    }
});

const titrecitation = StyleSheet.compose(styles.titrecitation, styles.row);
const image = StyleSheet.compose(styles.personne, styles.image);
const textperso = StyleSheet.compose(styles.personne, styles.textenom);
const titregaucheRes = StyleSheet.compose(styles.Right, styles.titleAccueilRes);
const titremilieuRes = StyleSheet.compose(
    styles.middle,
    styles.titleAccueilRes
);

export default AccueilAdminScreen;
