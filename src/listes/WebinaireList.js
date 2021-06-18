import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import List from "../Components/list";
import Images from "../Images";

function WebinaireListScreen({ navigation }) {
    return (
        <List
            name={["webinaire1","webinaire2","webinaire3","webinaire4",]}
            navigation={navigation}
            lien={"Agenda"}
            source= {Images.actu}
        />
    );
}

export default WebinaireListScreen;
