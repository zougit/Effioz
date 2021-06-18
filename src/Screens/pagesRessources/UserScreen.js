import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function UserScreen({ navigation }) {
    return (
            <View
                style={{
                    backgroundColor: "rgba(255, 165, 0, 0.4)",
                    flex:1,
                }}
            >
                <View style={styles.contentview}>
                    <Image
                        style={styles.image}
                        source={  Images.user}
                    />
                    <Text style={{ flex: 1 }}>Mon compte</Text>
                </View>

                <View style={{ flex: 1 }}>
                    <Text style={{ flex: 1 }}>nom: </Text>
                    <Text style={{ flex: 1 }}>prenom: </Text>
                    <Text style={{ flex: 1 }}>entreprise: </Text>
                    <Text style={{ flex: 1 }}>droits: </Text>
                    <Text style={{ flex: 1 }}>E-mail: </Text>
                    <Text style={{ flex: 1 }}>autre: </Text>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    row: {
        padding: 4,
        borderBottomColor: "grey",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    image: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        width: 200,
        height: 200,
    },

    contentview: {
        flex: 1.5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
});

export default UserScreen;
