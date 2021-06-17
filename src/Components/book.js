import * as React from "react";
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
} from "react-native";
import bookPlaylist from "../data/bookData";

const { height, width } = Dimensions.get("window");

export default function Book({ indexsrc }) {
    return (
        <ScrollView
            style={{ backgroundColor: "rgba(255, 165, 0, 0.4)", flex: 1 }}
        >
            <View style={{ flex: 1, flexDirection: "row" }}>
                <Image
                    style={styles.imageactu}
                    source={bookPlaylist[indexsrc].image}
                />
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <Text style={styles.titleAccueil}>
                       titre : {bookPlaylist[indexsrc].title}
                    </Text>

                    <Text style={styles.titleAccueil}>
                       auteur : {bookPlaylist[indexsrc].auteur}
                    </Text>
                    
                    <Text style={styles.titleAccueil}>
                       Date de parution : {bookPlaylist[indexsrc].parution}
                    </Text>
                </View>
            </View>
            <View style={{ flex: 1, margin: 10 }}>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.titleAccueil,{marginLeft: -5}]}>Description :</Text>
                    <Text>{bookPlaylist[indexsrc].description}</Text>
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    imageactu: {
        width: width/2.5,
        height: 230,
    },
    titleAccueil: {
        color: "black",
        fontWeight: "bold",
        fontSize: 22,
        margin: 10,
    },
});
