import * as React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Articleview from "../../Components/articleview";

const {height,width} = Dimensions.get('window');

function ActusScreen({ navigation }) {
    return (
        <View style={{ flex: 1, margin: 10 }}>
            <ScrollView >
                    <ScrollView style={{ flex: 5, maxHeight: (2*height)/3 }}> 
                        <View style={{ flex: 1}}>
                            <Text style={styles.titleAccueil}>
                                Comment l'innovation RH transforme
                                l'entreprise...{" "}
                            </Text>
                            <Image
                                style={styles.imageactu}
                                source={images.actu}
                            />
                        </View>
                        <View style={{ flex: 1, margin: 10 }}>
                            <Text style={styles.date}>Mars 2021</Text>
                            <View style={{ flex: 1 }}>
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed non risus. Suspendisse
                                    lectus tortor, dignissim sit amet,
                                    adipiscing nec, ultricies sed, dolor. Cras
                                    elementum ultrices diam. Maecenas ligula
                                    massa, varius a, semper congue, euismod non,
                                    mi.Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed non risus. Suspendisse
                                    lectus tortor, dignissim sit amet,
                                    adipiscing nec, ultricies sed, dolor. Cras
                                    elementum ultrices diam. Maecenas ligula
                                    massa, varius a, semper congue, euismod
                                </Text>
                                <Text style={{ marginTop: 10 }}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed non risus. Suspendisse
                                    lectus tortor, dignissim sit amet,
                                    adipiscing nec, ultricies sed, dolor. Cras
                                    elementum ultrices diam. Maecenas ligula
                                    massa, varius a, semper congue, euismod non,
                                    mi.Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed non, mi.
                                </Text>
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed non risus. Suspendisse
                                    lectus tortor, dignissim sit amet,
                                    adipiscing nec, ultricies sed, dolor. Cras
                                    elementum ultrices diam. Maecenas ligula
                                    massa, varius a, semper congue, euismod non,
                                    mi.Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed non, mi.
                                </Text>
                            </View>
                        </View>
                    </ScrollView>

                <View style={{ flex: 0.5 }}>
                    <Text style={styles.titleAccueil}>Autres Actus</Text>
                    <Articleview
                            name={
                                "Comment l'innovation RH transforme l'entreprise..."
                            }
                            navigation={navigation}
                            source={images.actu}
                        />
                     <Articleview
                            name={
                                "Comment l'innovation RH transforme l'entreprise..."
                            }
                            navigation={navigation}
                            source={images.actu}
                        />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    date: {
        color: "#aaa",
        width: 230,
        height: 30,
    },
    imageactu: {
        width: width,
        height: 230,
    },
    imageautreactu: {
        width: 110,
        height: 110,
    },
    titleAccueil: {
        color: "orange",
        fontWeight: "bold",
        fontSize: 22,
        margin: 10,
    },
    textactu: {
        width: 230,
        height: 80,
    },
});

export default ActusScreen;
