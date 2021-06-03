import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function List({ name, navigation, lien, source}) {
    const data = [];
    for (const i in name) {
        data.push({title: name[i]})
      }
    const Item = ({ title }) => (
        <View
            style={{
                flex: 0.5,
                flexDirection: "row",
                marginRight: 10,
                marginBottom: 10,
            }}
            onStartShouldSetResponder={() => navigation.navigate(lien)}
        >
            <Image
                style={{ width: 150, height: 100 }}
                source={source}
            />
            <View
                style={{ flex: 1, flexDirection: "column", marginLeft: 10 }}
            >
                <Text style={{ fontWeight: "bold", width: 250 }}>{title}</Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non risus. Suspendisse lectus tortor,
                </Text>
            </View>
        </View>
    );
    const renderItem = ({ item }) => <Item title={item.title} />;

    return (
        <FlatList
            style={{ margin:10,}}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
        />
    );
}


