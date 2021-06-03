import * as React from "react";
import { ScrollView, View, Text, StyleSheet, Image, Dimensions } from "react-native";
import articlePlaylist from "../data/articleData";

const { height, width } = Dimensions.get("window");

export default function Article({ indexsrc }) {
    return (
        <ScrollView style={{backgroundColor: "rgba(255, 165, 0, 0.4)", flex: 1}}>
            <View style={{ flex: 1}}>
                <Text style={styles.titleAccueil}>
                    {articlePlaylist[indexsrc].title}
                </Text>
                <Image
                    style={styles.imageactu}
                    source={articlePlaylist[indexsrc].image}
                />
            </View>
            <View style={{ flex: 1, margin: 10 }}>
                <Text style={styles.date}> {articlePlaylist[indexsrc].date} </Text>
                <View style={{ flex: 1 }}>
                    <Text>
                        {articlePlaylist[indexsrc].text}
                    </Text>
                </View>
            </View>
        </ScrollView>
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
    titleAccueil: {
        color: "black",
        fontWeight: "bold",
        fontSize: 22,
        margin: 10,
    },
});