import * as React from "react";
import { ScrollView, View, Text, StyleSheet, Image, Dimensions } from "react-native";
import articlePlaylist from "../Data/articleData";
import styles from './styles';

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