import * as React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Articleview from "../../Components/articleView";
import styles from "../../Components/styles"

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
                                style={styles.imageActu}
                                source={Images.actu}
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
                    <Text style={styles.titleAccueilActu}>Autres Actus</Text>
                    <Articleview
                            name={
                                "Comment l'innovation RH transforme l'entreprise..."
                            }
                            navigation={navigation}
                            source={Images.actu}
                        />
                     <Articleview
                            name={
                                "Comment l'innovation RH transforme l'entreprise..."
                            }
                            navigation={navigation}
                            source={Images.actu}
                        />
                </View>
            </ScrollView>
        </View>
    );
}

export default ActusScreen;
