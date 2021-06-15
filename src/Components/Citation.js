import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import citationPlaylist from "../data/citationData";

export default function Citation({ indexsrc }) {
    return (
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
    );
}

const styles = StyleSheet.create({
    contentview: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 165, 0, 0.4)",
    },
    
    textenom: {
        fontWeight: "bold",
        fontSize: 20,
        color: "orange",
        marginBottom: 20,
    },
    
    citation: {
        color: "black",
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 120,
    },
    
    image: {
        width: 90,
        height: 90,
        borderRadius: 400 / 2,
        marginBottom: 20,
    },
});