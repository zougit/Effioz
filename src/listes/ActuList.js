import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import List from "../Components/list";
import images from "../images";

function ActuListScreen({ navigation }) {
    return (
        <List 
            name={["Actu1","Actu2","Actu3","Actu4","Actu5",]}
            navigation={navigation}
            lien={"Actu"}
            source= {images.actu}
        />
    );
}

export default ActuListScreen;
