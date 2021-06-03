import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    Alert,
    Dimensions,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Webinaire from "../../Components/webinaire";

const { height, width } = Dimensions.get("window");

function WebinaireScreen({ navigation }) {
    return (
        <View style={{ flex: 1, margin: 20, marginTop: -10 }}>
            <ScrollView>
                <ScrollView
                    style={{
                        flex: 5,
                        maxHeight: (2 * height) / 3.6,
                        marginTop: 30,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                        }}
                    >
                        <Image
                            style={styles.imagewebinaire}
                            source={require("C:/Users/Giovanni/Desktop/Effioz/image/image-webinaire.png")}
                        />
                        <View
                            style={{
                                flexDirection: "column",
                                alignContent: "center",
                                margin: 20,
                            }}
                        >
                            <Text
                                style={{ fontWeight: "bold", marginBottom: 10 }}
                            >
                                Fleur Pellerin
                            </Text>
                            <Text style={styles.textwebinaire}>
                                Ex ministre, femme d'affaire passionée de
                                nouvelles technologies
                            </Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed non risus. Suspendisse lectus tortor,
                            dignissim sit amet, adipiscing nec, ultricies sed,
                            dolor. Cras elementum ultrices diam. Maecenas ligula
                            massa, varius a, semper congue, euismod non,
                            mi.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed non risus. Suspendisse lectus
                            tortor, dignissim sit amet, adipiscing nec,
                            ultricies sed, dolor. Cras elementum ultrices diam.
                            Maecenas ligula massa, varius a, semper congue,
                            euismod
                        </Text>
                        <Text style={{ marginTop: 10 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed non risus. Suspendisse lectus tortor,
                            dignissim sit amet, adipiscing nec, ultricies sed,
                            dolor. Cras elementum ultrices diam. Maecenas ligula
                            massa, varius a, semper congue, euismod non,
                            mi.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed non, mi.
                        </Text>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed non risus. Suspendisse lectus tortor,
                            dignissim sit amet, adipiscing nec, ultricies sed,
                            dolor. Cras elementum ultrices diam. Maecenas ligula
                            massa, varius a, semper congue, euismod non,
                            mi.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed non, mi.
                        </Text>
                    </View>
                </ScrollView>

                <View style={{ flex: 1, marginTop: 10 }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => alert("bien noté !")}
                    >
                        <Text style={{ color: "#fff", fontSize: 20 }}>
                            Ajouter à l'Agenda
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.titleAccueil}>Autres Webiniaires</Text>
                    <Webinaire
                                    name={"Fleur Pellerin"}
                                    navigation={navigation}
                                    source={require("C:/Users/Giovanni/Desktop/Effioz/image/image-webinaire.png")}
                                />
                    <Webinaire
                                    name={"Fleur Pellerin"}
                                    navigation={navigation}
                                    source={require("C:/Users/Giovanni/Desktop/Effioz/image/image-webinaire.png")}
                                />

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    imagewebinaire: {
        width: 140,
        height: 140,
    },

    textwebinaire: {
        height: height / 8,
        width: width / 2.5,
        marginRight: 20,
    },

    titleAccueil: {
        color: "orange",
        fontWeight: "bold",
        fontSize: 22,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#000",
        padding: 10,
        marginRight: 20,
        marginBottom: 10,
    },
});

export default WebinaireScreen;
