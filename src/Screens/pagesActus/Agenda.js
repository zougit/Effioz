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
import styles from "../../Components/styles"

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
                            style={styles.imageWebinaire}
                            source={ Images.webinaire}
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
                            <Text style={styles.textWebinaire}>
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
                        style={styles.buttonWebinaire}
                        onPress={() => alert("bien noté !")}
                    >
                        <Text style={{ color: "#fff", fontSize: 20 }}>
                            Ajouter à l'Agenda
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.titleAccueilActu}>Autres Webiniaires</Text>
                    <Webinaire
                                    name={"Fleur Pellerin"}
                                    navigation={navigation}
                                    source={ Images.webinaire}
                                />
                    <Webinaire
                                    name={"Fleur Pellerin"}
                                    navigation={navigation}
                                    source={ Images.webinaire}
                                />

                </View>
            </ScrollView>
        </View>
    );
}

export default WebinaireScreen;
