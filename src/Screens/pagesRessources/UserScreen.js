import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from "../../Components/styles"


function UserScreen({ navigation }) {
    return (
            <View
                style={styles.containerOrange}
            >
                <View style={styles.contentUser}>
                    <Image
                        style={styles.imageUser}
                        source={Images.user}
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

export default UserScreen;
