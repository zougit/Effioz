import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Videos from "../../Components/video";
import videoPlaylist from "../../Data/videoData";

function VideoScreen({ route }) {
    return (
        <View style={styles.container} >
            <Text style={styles.title}> {videoPlaylist[route.params?.index].title} </Text>
            <Videos source={videoPlaylist[route.params?.index].source} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(255, 165, 0, 0.4)",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: "black",
        fontWeight: "bold",
        fontSize: 22,
        margin: 10,
    },
});
export default VideoScreen;
