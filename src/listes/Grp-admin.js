import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

function GrpAdminScreen({ navigation }) {
    const data = [
        { title: "groupe1" },
        { title: "groupe2" },
        { title: "groupe3" },
        { title: "groupe4" },
        { title: "groupe5" },
    ];

    const Item = ({ title }) => (
        <View
            style={{
                flex: 0.5,
                flexDirection: "row",
                marginRight: 10,
                marginBottom: 10,
            }}
            
        >
            <Image
                style={{ width: 70, height: 70 }}
                source={require("C:/Users/Giovanni/Desktop/Effioz/image/image-grp.png")}
            />
            <View style={{ flex: 1, flexDirection: "column", marginLeft: 10 }}>
                <Text style={{ fontWeight: "bold", width: 250 }}>{title}</Text>
                <Text>*dernier message*</Text>
            </View>
            <Text onPress={() => alert("gerer les grps")}>gerer</Text>
        </View>
    );
    const renderItem = ({ item }) => <Item title={item.title} />;

    return (
        <View
            style={{
                backgroundColor: "rgba(255, 165, 0, 0.4)",
                flex: 1,
            }}
        >
        <View
            style={{
                flex: 1,
                margin: 10,
            }}
        >
            <View style={{ flex: 0.5, margin: 10 }}>
                <View style={{ alignItems: "center", flex: 2 }}>
                    <Text
                        style={{ fontWeight: "bold", fontSize: 23, margin: 10 }}
                    >
                        Gérer mes groupes
                    </Text>
                    <Text>Administrer et notifier mes groupes</Text>
                </View>

                <View style={{ flexDirection: "row", flex: 1, alignContent: "center", justifyContent:"center", margin: 10 }}>
                    <TouchableOpacity
                        style={styles.button2}
                        onPress={() => alert("ok")}
                    >
                        <Text style={{ color: "#fff", fontSize: 17 , width: 100}}>
                            conduite de changement
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button2}
                        onPress={() => alert("ok")}
                    >
                        <Text style={{ color: "#fff", fontSize: 17 , width: 100}}>
                            Valorisation d'équipe
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ margin: 5, flex: 1 }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => alert("groupe ajouté !")}
                    >
                        <Text style={{ color: "#fff", fontSize: 20 }}>
                            Ajouter un groupe
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                style={{ flex: 2, margin:10 }}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.title}
            />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#000",
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    button2: {
        backgroundColor: "orange",
        padding: 10,
        marginRight: 5,
    },
});

export default GrpAdminScreen;
