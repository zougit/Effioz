import * as React from "react";
import { Video } from "expo-av";
import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

export default function video({source}) {
    return (
        <Video
            source={{
               uri: source,
            }}
            style={styles.video}
            useNativeControls
            resizeMode="contain"
            isLooping
        />
    );
}

const styles = StyleSheet.create({
    video: {
        width: width - 20,
        height: 210,
    },
});