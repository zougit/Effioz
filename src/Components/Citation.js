import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import citationPlaylist from "../data/citationData";

export default function Citation({ indexsrc }) {
    return (
        <View style={{backgroundColor: "rgba(255, 165, 0, 0.4)", flex: 1}}>
            <View style={styles.contentview}>
                <Image
                    style={styles.image}
                    source={citationPlaylist[indexsrc].image}
                />
                <Text style={styles.textenom}> {citationPlaylist[indexsrc].nom} </Text>
                <Text style={styles.citation}>
                    {citationPlaylist[indexsrc].text}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contentview: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
    },
    
    textenom: {
        fontWeight: "bold",
        fontSize: 20,
        color: "orange",
    },

    citation: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        marginLeft: 70,
        marginRight: 50,
    },

    image: {
        width: 90,
        height: 90,
        borderRadius: 400 / 2,
    },
});