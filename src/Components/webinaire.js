import * as React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");

export default function Webinaire({ name, navigation, source }) {
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Agenda")}>
            <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
                <Image style={styles.imagewebinaire} source={source} />
                <View
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        marginLeft: 10
                    }}
                >
                    <Text
                        style={{
                            fontWeight: "bold",
                            marginBottom: 10
                        }}
                    >
                        {name}
                    </Text>
                    <Text style={styles.textwebinaire}>
                        Ex ministre, femme d'affaire passionée de nouvelles
                        technologies
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    imagewebinaire: {
        width: 80,
        height: 80
    },

    textwebinaire: {
        height: 50,
        width: width / 2.5,
        marginRight: 20
    }
});
