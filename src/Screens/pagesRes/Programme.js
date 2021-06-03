import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import StepIndicator from "react-native-step-indicator";

function PrgmScreen({ navigation }) {
    const customStyles = {
        stepIndicatorSize: 40,
        currentStepIndicatorSize:40,
        separatorStrokeWidth: 5,
        currentStepStrokeWidth: 4,
        stepStrokeCurrentColor: '#fe7013',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#fe7013',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#fe7013',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#fe7013',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 15,
        currentStepIndicatorLabelFontSize: 17,
        stepIndicatorLabelCurrentColor: '#fe7013',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 13,
        currentStepLabelColor: '#fe7013',
      }

    return (
        <View style={{
            flex: 1,
            backgroundColor: "rgba(255, 165, 0, 0.4)",
        }}>
            <Text style={styles.title} >Mes modules en cours </Text>
            <Text style={styles.title2}>module 1</Text>
            <View></View>
            <StepIndicator
                style={styles.container}
                stepCount={3}
                customStyles={customStyles}
                currentPosition= {1}
                labels={null}
            />
            <Text style={styles.title2}>module 2</Text>
            <StepIndicator
                customStyles={customStyles}
                currentPosition= {2}
                labels={null}
            />
            <Text style={styles.title2}>module 3</Text>
            <StepIndicator
                stepCount={7}
                customStyles={customStyles}
                currentPosition= {3}
                labels={null}
            />
        </View>
    );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
    },

title: {
        fontWeight: "bold",
        marginTop: 20,
        marginLeft: 20,
    },

title2: {
        marginTop: 20,
        marginLeft: 20,
    },

});

export default PrgmScreen;
