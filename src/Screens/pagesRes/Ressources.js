import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Accordeon from "../../Components/accordeon";
import audioBookPlaylist from "../../data/podcastsData";
import citationPlaylist from "../../data/citationData";
import articlePlaylist from "../../data/articleData";
import videoPlaylist from "../../data/videoData";

const types = {
    books: 'books',
    podcasts: 'podcasts',
    citations: 'Citations',
    articles: 'Articles', 
    vidéos: 'Vidéos',
 }

const datapod = []
for (const i in audioBookPlaylist) {
    datapod.push( audioBookPlaylist[i].title );
}

const dataarticle = []
for (const i in articlePlaylist) {
    dataarticle.push( articlePlaylist[i].title );
}

const datacitation = []
for (const i in citationPlaylist) {
    datacitation.push( citationPlaylist[i].title );
}

const datavideo = []
for (const i in videoPlaylist) {
    datavideo.push( videoPlaylist[i].title );
}

const data = [
    {
        title: "livres",
        content: ["livre1", "livre2", "livre3", "livre4", "livre5"],
        type: types.books,
    },
    {
        title: "Podcasts",
        content: datapod ,
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
    
    const openPodcasts = (index) => {
    navigation.navigate({
        name: 'Podcasts',
        params: { index },
        // merge: true,
      });
    };

    const openCitations = (index) => {
    navigation.navigate({
        name: 'Citations',
        params: { index },
        // merge: true,
      });
    };

    const openArticles = (index) => {
    navigation.navigate({
        name: 'Articles',
        params: { index },
        // merge: true,
      });
    };

    const openVideos = (index) => {
    navigation.navigate({
        name: 'Videos',
        params: { index },
        // merge: true,
      });
    };

    return (
            <View style={{backgroundColor: "rgba(255, 165, 0, 0.4)", flex: 1 }}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <Accordeon
                            name={item.title}
                            name2={item.content}
                            navigation={navigation}
                            onPressItem={(index) => {
                                if(item.type == types.books){
                                    // naviguer vers livre
                                } 
                                else if(item.type == types.podcasts) {
                                    openPodcasts(index)
                                }
                                else if(item.type == types.citations){
                                    openCitations(index)
                                } 
                                else if(item.type == types.articles){
                                    openArticles(index)
                                } 
                                else if(item.type == types.vidéos){
                                    openVideos(index)
                                } 
                            }}
                        />
                    )}
                    keyExtractor={(item) => item.title}
                />
            </View>
    );
}

const styles = StyleSheet.create({
    item: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 20,
        marginLeft: 20,
    },
});

export default RessourceScreen;