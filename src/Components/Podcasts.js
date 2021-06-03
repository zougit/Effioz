import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icons from "react-native-vector-icons/Entypo";
import { Audio } from "expo-av";
import audioBookPlaylist from "../data/podcastsData";

function Podcasts({indexsrc}) {
    const [sound, setSound] = React.useState();
    const [index, setIndex] = React.useState(indexsrc);
    //const src = "C:/Users/Giovanni/Desktop/Effioz/image/extrait_morceau.mp3";
    const src = {
        uri: audioBookPlaylist[index].uri
    };
    async function playSound() {
        console.log("Loading Sound.....");
        const { sound } = await Audio.Sound.createAsync(src);
        console.log("done");
        setSound(sound);
        console.log("Playing Sound");
        await sound.playAsync();
    }

    async function nextSound() {
        setIndex(index => index + 1);
        if (index !== audioBookPlaylist.length + 1 && index !== undefined) {
            if (sound) {
                Soundstop();
            }
        } else {
            setIndex(index => (index = 0));
        }
    }

    async function previousSound() {
        setIndex(index => index - 1);
        if (index !== audioBookPlaylist[-1] && index !== undefined) {
            if (sound) {
                Soundstop();
            }
        } else {
            setIndex(index => (index = 0));
        }
    }

    async function Soundstop() {
        if (sound) {
            console.log("Stopping sound..");
            setSound(null);
            await sound.stopAsync();
            console.log("done");
        }
    }

    React.useEffect(() => {
        return sound
            ? () => {
                  console.log("Unloading Sound");
                  sound.unloadAsync();
              }
            : undefined;
    }, [sound]);

    return (
        <View style={styles.container}>
            <Image
                style={styles.albumCover}
                source={{
                    uri:
                        "http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg"
                }}
            />
            <View style={styles.controls}>
                <TouchableOpacity
                    style={styles.control}
                    onPress={() => previousSound()}
                >
                    <Icons
                        name="controller-fast-backward"
                        size={48}
                        color="#444"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.control}
                    onPress={sound ? Soundstop : playSound}
                >
                    {sound ? (
                        <Icons name="controller-paus" size={48} color="#444" />
                    ) : (
                        <Icons name="controller-play" size={48} color="#444" />
                    )}
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.control}
                    onPress={() => nextSound()}
                >
                    <Icons
                        name="controller-fast-forward"
                        size={48}
                        color="#444"
                    />
                </TouchableOpacity>
            </View>
            <Text> {audioBookPlaylist[index].title} </Text>
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
    albumCover: {
        width: 250,
        height: 250
    },
    controls: {
        flexDirection: "row"
    },
    control: {
        margin: 20
    }
});

export default Podcasts;
