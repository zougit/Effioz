import * as React from "react";
import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start"
    },

    titleAccueilActu: {
        color: "orange",
        fontWeight: "bold",
        fontSize: 20
    },

    titleAccueilRes: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20
    },

    GrandTitreAccueil: {
        color: "darkorange",
        fontWeight: "bold",
        textDecorationLine: "underline",
        fontSize: 25
    },

    titleUser: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginTop: 20,
        marginLeft: 20
    },

    Right: { marginRight: 45 },
    middle: { marginRight: 30, marginLeft: 10 },

    contentView: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center"
    },

    texteNom: {
        fontWeight: "bold",
        fontSize: 20,
        color: "orange",
        marginBottom: 20
    },

    citation: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        marginLeft: 70,
        marginRight: 50
    },
    
    citation2: {
        color: "black",
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 120,
    },

    textRessources: {
        width: 110,
        height: 90
    },

    row: {
        borderBottomColor: "grey",
        borderBottomWidth: StyleSheet.hairlineWidth
    },

    titreCitation: {
        color: "white",
        fontSize: 23,
        marginBottom: 30
    },

    image: {
        width: 90,
        height: 90,
        borderRadius: 400 / 2,
        marginBottom: 20
    },

    video: {
       // width: width - 20,
        height: 210
    },

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

    date: {
        color: "#aaa",
        width: 230,
        height: 30,
    },

    imageActu: {
      //  width: width,
        height: 230,
    },

    titleAccueil: {
        color: "black",
        fontWeight: "bold",
        fontSize: 22,
        margin: 10,
    },

    textActu: {
        width: 230,
        height: 80
    },

    imageActuView: {
        width: 110,
        height: 110
    },

    imageWebinaire: {
        width: 140,
        height: 140,
    },

    textWebinaire: {
        height: height / 8,
        width: width / 2.5,
        marginRight: 20,
    },

    buttonWebinaire: {
        alignItems: "center",
        backgroundColor: "#000",
        padding: 10,
        marginRight: 20,
        marginBottom: 10,
    },

    cover: {
        width: width/2.5,
        height: 230,
    },

    backgroundOrange : {
        backgroundColor: "rgba(255, 165, 0, 0.4)", 
        flex: 1,
    },

    indicatorContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        //width: windowWidth,
        zIndex: 2,
    },

    indicator: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        borderColor: "grey",
        borderWidth: 1,
        marginHorizontal: 10,
        marginBottom: 10,
    },

    activeIndicator: {
        backgroundColor: "orange",
        borderWidth: 0,
    },

    albumCover: {
        width: 250,
        height: 250
    },
    
    controls: {
        flexDirection: "row"
    },
    
    control: {
        margin: 20
    },

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
        marginBottom: 5,
        borderRadius: 10,
        alignItems: "center",
        alignSelf:"center",
        width:70
    },

    title: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    inputproduit: {
        justifyContent: "center",
        fontSize: 25,
        backgroundColor: "#CCC",
    },

    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    btnSubmit: {
        backgroundColor: "rgba(255, 165, 0, 0.7)",
        marginTop: 20,
        marginBottom: -10,
    },

    btnExit: {
        color: "red",
        marginLeft: 80,
        marginTop: -30,
        marginRight: -20,
    },

    containerOrange: {
        flex: 1,
        backgroundColor: "rgba(255, 165, 0, 0.4)",
    },

    imageUser: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        width: 200,
        height: 200,
    },

    contentUser: {
        flex: 1.5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    
    titleVideo: {
        color: "black",
        fontWeight: "bold",
        fontSize: 22,
        margin: 10,
    },

    containerStyle: {
        borderRadius: 20,
        backgroundColor: "rgba(255, 165, 0, 0.4)",
        width: 200,
        height: 200,
      }

});


module.exports = styles;