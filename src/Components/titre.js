import * as React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

export default function Titre({ name, navigation, lien }) {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: "row",
                marginBottom: 10,
            }}
        >
            <Text style={styles.titleAccueilActu}> {name} </Text>
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                }}
            >
                <Text onPress={() => navigation.navigate( lien )}>
                    {" "}
                    voir tout{" "}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titleAccueilActu: {
        color: "orange",
        fontWeight: "bold",
        fontSize: 18,
    },
});
