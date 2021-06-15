import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";

export default function Accordeon({ name, content, onPressItem = () => null}) {
    const [isenabled, setEnabled] = React.useState(false);
    const data = [];
    for (const i in content) {
        data.push({ title: content[i] });
    }

    return (
        <View style={{ flex: 5, marginTop: 20, marginLeft: 20 }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <Text
                    style={styles.item}
                    onPress={() => setEnabled(!isenabled)}
                >
                    {" "}
                    {name}{" "}
                </Text>

                {isenabled ? (
                    <Icon name="up" type="AntDesign" size={30} />
                ) : (
                    <Icon name="down" type="AntDesign" size={30} />
                )}
            </View>

            {isenabled ? (
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => (
                        <Text
                            style={styles.item2}
                            onPress={() => {
                                onPressItem(index)
                            }}
                        >
                            {item.title}
                        </Text>
                    )}
                    keyExtractor={(item) => item.title}
                />
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        fontSize: 30,
        fontWeight: "bold",
    },
    item2: {
        flex: 1,
        fontSize: 20,
        marginLeft: 30,
    },
});
