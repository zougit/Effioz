import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

function Grp({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255, 165, 0, 0.4)",
            }}
        >
            <Text>*insert chat de groupe*</Text>
        </View>
    );
}

export default Grp;
