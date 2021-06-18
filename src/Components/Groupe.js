import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from './styles';

function Grp({ navigation }) {
    return (
        <View
            style={[styles.contentView,styles.backgroundOrange]}
        >
            <Text>*insert chat de groupe*</Text>
        </View>
    );
}

export default Grp;
