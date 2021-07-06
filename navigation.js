import * as React from "react";
import { View, Text, StyleSheet, Image, Button, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

import IconA from "react-native-vector-icons/AntDesign";
import IconE from "react-native-vector-icons/EvilIcons";
import IconM from "react-native-vector-icons/MaterialIcons";

import UserScreen from "./src/Screens/pagesRessources/UserScreen";
import RessourceScreen from "./src/Screens/pagesRessources/RessourcesScreen";
import ProgrammeScreen from "./src/Screens/pagesRessources/ProgrammeScreen";
import PodcastsScreen from "./src/Screens/pagesRessources/PodcastsScreen";
import CitationScreen from "./src/Screens/pagesRessources/CitationsScreen";
import ArticleScreen from "./src/Screens/pagesRessources/ArticlesScreen";
import VideoScreen from "./src/Screens/pagesRessources/VideoScreen";
import GroupeScreen from "./src/Screens/pagesRessources/GroupeScreen";
import BookScreen from "./src/Screens/pagesRessources/BookScreen";

import AcceuilScreen from "./src/Screens/pagesActus/Acceuil";
import ActusScreen from "./src/Screens/pagesActus/Actus";
import WebinaireScreen from "./src/Screens/pagesActus/Agenda";
import AccueilAdminScreen from "./src/Screens/pagesActus/Acceuil-admin";
import AccueilOrgaScreen from "./src/Screens/pagesActus/Acceuil-orga";

import WebinaireListScreen from "./src/Listes/WebinaireList";
import ActuListScreen from "./src/Listes/ActuList";
import GroupeListScreen from "./src/Listes/GroupeList";
import GroupeAdmin from "./src/Listes/GroupeAdmin";

import ParamScreen from "./src/Screens/params";

import Images from "./src/Images";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const headeroptionActus = ({ navigation, route }) => ({
    headerTitleStyle: { alignSelf: "center" },
    headerStyle: {
        backgroundColor: "#000",
    },
    headerTintColor: "#fff",
    headerLeft: () => (
        <View>
            <StatusBar animated={true} barStyle={"light-content"} />
            {route.name == "Effioz" ? (
                <TouchableOpacity
                    onPress={() =>
                        navigation.dispatch(DrawerActions.openDrawer())
                    }
                >
                    <Image style={styles.icon} source={Images.menu} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()} >
                    <IconA color="white" name="arrowleft" type="AntDesign" size={30} />
                </TouchableOpacity>
            )}
        </View>
    ),
});

const headeroptionRes = ({ navigation, route }) => ({
    headerTitleStyle: { alignSelf: "center" },
    headerStyle: {
        backgroundColor: "#000",
    },
    headerTintColor: "darkorange",
    headerLeft: () => (
        <View>
            <StatusBar animated={true} barStyle={"light-content"} />
            {route.name == "Groupes" ||
            route.name == "Programme" ||
            route.name == "Ressources" ? (
                <TouchableOpacity
                    onPress={() =>
                        navigation.dispatch(DrawerActions.openDrawer())
                    }
                >
                    <Image style={styles.icon} source={Images.menu} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()} >
                    <IconA color="white" name="arrowleft" type="AntDesign" size={30} />
                </TouchableOpacity>
            )}
        </View>
    ),
});

function Accueil() {
    return (
        <Stack.Navigator screenOptions={headeroptionActus}>
            <Stack.Screen name="Effioz" component={AcceuilScreen} />
            <Stack.Screen name="Actu" component={ActusScreen} />
            <Stack.Screen name="Actus" component={ActuListScreen} />
            <Stack.Screen name="Agenda" component={WebinaireScreen} />
            <Stack.Screen name="Webinaire" component={WebinaireListScreen} />
        </Stack.Navigator>
    );
}

function User() {
    return (
        <Stack.Navigator screenOptions={headeroptionRes}>
            <Stack.Screen name="User" component={UserScreen} />
        </Stack.Navigator>
    );
}

function AccueilAdmin() {
    return (
        <Stack.Navigator screenOptions={headeroptionRes}>
            <Stack.Screen name="Accueil Admin" component={AccueilAdminScreen} />
            <Stack.Screen name="Grp-Admin" component={GroupeAdmin} />
        </Stack.Navigator>
    );
}

function AccueilOrga() {
    return (
        <Stack.Navigator screenOptions={headeroptionRes}>
            <Stack.Screen name="Accueil Orga" component={AccueilOrgaScreen} />
        </Stack.Navigator>
    );
}

function Groupe() {
    return (
        <Stack.Navigator screenOptions={headeroptionRes}>
            <Stack.Screen name="Groupes" component={GroupeListScreen} />
            <Stack.Screen name="Groupe" component={GroupeScreen} />
        </Stack.Navigator>
    );
}

function Ressources() {
    return (
        <Stack.Navigator screenOptions={headeroptionRes}>
            <Stack.Screen name="Ressources" component={RessourceScreen} />
            <Stack.Screen name="Podcasts" component={PodcastsScreen} />
            <Stack.Screen name="Citations" component={CitationScreen} />
            <Stack.Screen name="Articles" component={ArticleScreen} />
            <Stack.Screen name="Videos" component={VideoScreen} />
            <Stack.Screen name="Books" component={BookScreen} />
        </Stack.Navigator>
    );
}

function Programme() {
    return (
        <Stack.Navigator screenOptions={headeroptionRes}>
            <Stack.Screen name="Programme" component={ProgrammeScreen} />
        </Stack.Navigator>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "orange",
                inactiveTintColor: "black",
                showLabel: false,
            }}
        >
            <Tab.Screen
                name="Accueil"
                component={Accueil}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <IconA
                            focused={focused}
                            color={color}
                            name="home"
                            type="AntDesign"
                            size={30}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Programme"
                component={Programme}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <IconA
                            focused={focused}
                            color={color}
                            name="contacts"
                            type="AntDesign"
                            size={30}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Groupes"
                component={Groupe}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <IconM
                            focused={focused}
                            color={color}
                            name="groups"
                            type="MaterialIcons"
                            size={40}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Ressources"
                component={Ressources}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <IconA
                            focused={focused}
                            color={color}
                            name="folder1"
                            type="AntDesign"
                            size={30}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Utilisateur"
                component={User}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <IconE
                            focused={focused}
                            color={color}
                            name="user"
                            type="EvilIcons"
                            size={45}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

function MyDrawers() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Acceuil" component={MyTabs} />
            <Drawer.Screen name="paramètres" component={ParamScreen} />
            <Drawer.Screen name="Accueil-orga" component={AccueilOrga} />
            <Drawer.Screen name="Accueil-admin" component={AccueilAdmin} />
            <Drawer.Screen name="Grp-admin" component={GroupeAdmin} />
        </Drawer.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyDrawers />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    icon: {
        tintColor: "white",
        width: 30,
        height: 30,
        margin: 10,
    },
});
