import * as React from "react";
import { View, Text, StyleSheet, Image, ImageStore } from "react-native";
import {
    FlatList,
    TouchableWithoutFeedback
} from "react-native-gesture-handler";
import images from "../images";

function GrpListScreen({ navigation }) {
    const data = [
        { title: "groupe1" },
        { title: "groupe2" },
        { title: "groupe3" },
        { title: "groupe4" },
        { title: "groupe5" }
    ];

    const Item = ({ title }) => (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Groupe")}>
            <View
                style={{
                    flex: 0.5,
                    flexDirection: "row",
                    marginRight: 10,
                    marginBottom: 10
                }}
            >
                <Image
                    style={{ width: 70, height: 70 }}
                    source={ images.grp}
                />
                <View
                    style={{ flex: 1, flexDirection: "column", marginLeft: 10 }}
                >
                    <Text style={{ fontWeight: "bold", width: 250 }}>
                        {title}
                    </Text>
                    <Text>*dernier message*</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
    const renderItem = ({ item }) => <Item title={item.title} />;

    return (
        <View
            style={{
                backgroundColor: "rgba(255, 165, 0, 0.4)",
                flex: 1
            }}
        >
            <FlatList
                style={{ margin: 10 }}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.title}
            />
        </View>
    );
}

export default GrpListScreen;
