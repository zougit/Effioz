import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Videos from "../../Components/video";
import videoPlaylist from "../../Data/videoData";
import styles from "../../Components/styles"

function VideoScreen({ route }) {
    return (
        <View style={styles.containerOrange} >
            <Text style={styles.titleVideo}> {videoPlaylist[route.params?.index].title} </Text>
            <Videos source={videoPlaylist[route.params?.index].source} />
        </View>
    );
}


export default VideoScreen;
