import * as React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");

export default function Articleview({ name, navigation, source }) {
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Actu")}>
            <View
                style={{
                    flex: 0.5,
                    flexDirection: "row",
                    marginRight: 10,
                    marginBottom: 10
                }}
            >
                <Image style={styles.imageactu} source={source} />
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
                            marginRight: 5
                        }}
                    >
                        {name}
                    </Text>
                    <Text style={styles.textactu}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed non risus. Suspendisse lectus tortor,
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    textactu: {
        width: 230,
        height: 80
    },

    imageactu: {
        width: 110,
        height: 110
    }
});
