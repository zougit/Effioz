import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import citationPlaylist from "../Data/citationData";
import styles from './styles';

export default function Citation({ indexsrc }) {
    return (
            <View style={[styles.contentView,styles.backgroundOrange]}>
                <Image
                    style={styles.image}
                    source={citationPlaylist[indexsrc].image}
                />
                <Text style={styles.texteNom}> {citationPlaylist[indexsrc].nom} </Text>
                <Text style={styles.citation2}>
                    {citationPlaylist[indexsrc].text}
                </Text>
            </View>
    );
}
