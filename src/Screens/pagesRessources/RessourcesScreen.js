import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Accordeon from "../../Components/accordeon";
import audioBookPlaylist from "../../Data/podcastsData";
import citationPlaylist from "../../Data/citationData";
import articlePlaylist from "../../Data/articleData";
import videoPlaylist from "../../Data/videoData";
import bookPlaylist from "../../Data/bookData";
import styles from "../../Components/styles"

const types = {
    books: "books",
    podcasts: "podcasts",
    citations: "Citations",
    articles: "Articles",
    vidéos: "Vidéos",
};

const databook = [];
for (const i in bookPlaylist) {
    databook.push(bookPlaylist[i].title);
}

const datapodcast = [];
for (const i in audioBookPlaylist) {
    datapodcast.push(audioBookPlaylist[i].title);
}

const datacitation = [];
for (const i in citationPlaylist) {
    datacitation.push(citationPlaylist[i].title);
}

const dataarticle = [];
for (const i in articlePlaylist) {
    dataarticle.push(articlePlaylist[i].title);
}

const datavideo = [];
for (const i in videoPlaylist) {
    datavideo.push(videoPlaylist[i].title);
}

const data = [
    {
        title: "livres",
        content: databook,
        type: types.books,
    },
    {
        title: "Podcasts",
        content: datapodcast,
        type: types.podcasts,
    },
    {
        title: "Citations",
        content: datacitation,
        type: types.citations,
    },
    {
        title: "Articles",
        content: dataarticle,
        type: types.articles,
    },
    {
        title: "Vidéos",
        content: datavideo,
        type: types.vidéos,
    },
];

function RessourceScreen({ navigation }) {
    const openBooks = (index) => {
        navigation.navigate({
            name: "Books",
            params: { index },
            // merge: true,
        });
    };

    const openPodcasts = (index) => {
        navigation.navigate({
            name: "Podcasts",
            params: { index },
            // merge: true,
        });
    };

    const openCitations = (index) => {
        navigation.navigate({
            name: "Citations",
            params: { index },
            // merge: true,
        });
    };

    const openArticles = (index) => {
        navigation.navigate({
            name: "Articles",
            params: { index },
            // merge: true,
        });
    };

    const openVideos = (index) => {
        navigation.navigate({
            name: "Videos",
            params: { index },
            // merge: true,
        });
    };

    return (
        <View style={styles.containerOrange}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Accordeon
                        name={item.title}
                        content={item.content}
                        onPressItem={(index) => {
                            if (item.type == types.books) {
                                openBooks(index);
                            } else if (item.type == types.podcasts) {
                                openPodcasts(index);
                            } else if (item.type == types.citations) {
                                openCitations(index);
                            } else if (item.type == types.articles) {
                                openArticles(index);
                            } else if (item.type == types.vidéos) {
                                openVideos(index);
                            }
                        }}
                    />
                )}
                keyExtractor={(item) => item.title}
            />
        </View>
    );
}

export default RessourceScreen;
