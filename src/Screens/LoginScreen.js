import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../Redux/Actions/authActions";
import styles from "../Components/styles"

function LoginScreen() {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()

    const [name, setname] = React.useState("root")
    const [password, setpassword] = React.useState("root")
console.log(name);

    const login= () => {
        user.name= name
        user.password= password
        dispatch(actions.userLogin())
    }

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
            <View style={styles.containerStyle}>
                <Text style={{ alignSelf: "center", fontSize: 26 }}>Log In</Text>

                <View style={styles.title}>
                    <TextInput placeholder={"name"} onChangeText={(textname) => setname(textname)} />
                    <TextInput placeholder={"password"} onChangeText={(textpassword) => setpassword(textpassword)} />
                </View>

                <TouchableOpacity style={styles.button2} onPress={login()} >
                    <Text>submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen