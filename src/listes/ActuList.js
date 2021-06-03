import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import List from "../Components/list";

function ActuListScreen({ navigation }) {
    return (
        <List 
            name={["Actu1","Actu2","Actu3","Actu4","Actu5",]}
            navigation={navigation}
            lien={"Actu"}
            source= {require("C:/Users/Giovanni/Desktop/Effioz/image/image-actu.png")}
        />
    );
}

export default ActuListScreen;
