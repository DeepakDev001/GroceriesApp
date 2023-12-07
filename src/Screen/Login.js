import React, { useState } from 'react'
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { myColors } from '../Utils/MyColors'
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authentication } from '../../firebaseConfig';

const Login = () => {
    const nav = useNavigation()
    const [isVisbile, setIsVisbile] = useState(true)
    const [loginCredentials, setLoginCredentials] = useState({
        email: "",
        password: ""
    })
    const { email, password } = loginCredentials

    // =========== login_user_Function
    const loginUser = () => {
        signInWithEmailAndPassword(authentication, email, password)
            .then((val) => {
                nav.replace('Home');
            })
            .catch((err) => {
                Alert.alert(err.message);
            })
    }
    //================ main_return_function ===========//
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: myColors.secoundary, }}>
            <StatusBar style='white' />
            <ScrollView style={{ flex: 1, paddingTop: 50, }}>
                <Image style={style.imgIcon}
                    source={require('../../assets/mainIcon.png')} />
                <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
                    <Text style={style.signupText}>Loging</Text>
                    <Text style={style.credentialsText}>Enter your email and password</Text>

                    {/*======= email ============*/}
                    <View>
                        <Text style={style.userText}>Email</Text>
                        <TextInput
                            value={email}
                            onChangeText={(val) => {
                                setLoginCredentials({ ...loginCredentials, email: val });
                            }}
                            keyboardType="email-address"
                            style={style.inputText} />
                    </View>
                    {/*======= password ==========*/}
                    <View>
                        <Text style={style.userText}>Password</Text>
                        <View style={{
                            borderColor: "#E3E3E3",
                            borderBottomWidth: 2,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <TextInput
                                value={password}
                                onChangeText={(val) => {
                                    setLoginCredentials({ ...loginCredentials, password: val });
                                }}
                                secureTextEntry={isVisbile}
                                keyboardType="ascii-capable"
                                style={style.passwordText}
                            />
                            <Ionicons
                                onPress={() => setIsVisbile(!isVisbile)}
                                name={isVisbile ? "eye-off-outline" : "eye-outline"}
                                size={24} color="black"
                            />
                        </View>
                        <TouchableOpacity>
                            <Text style={style.forgetText}>Forget password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={loginUser}
                            style={style.Touchable}
                        >
                            <Text style={style.SignUpText}>Login</Text>
                        </TouchableOpacity>
                        <View style={style.alreadyAccountText}>
                            <Text style={{ fontSize: 16, fontWeight: 500 }}>Don't have an account?</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    nav.navigate('Signup')
                                }}
                            >
                                <Text style={style.loginText}>SingUp</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

//========== Style_Sheet
const style = StyleSheet.style = ({
    imgIcon: {
        height: 75,
        width: 65,
        alignSelf: "center",
    },
    signupText: {
        color: myColors.third,
        fontSize: 24,
        fontWeight: "700"
    },
    credentialsText: {
        fontSize: 16,
        fontWeight: "400",
        color: "grey",
        marginTop: 10
    },
    userText: {
        fontSize: 16,
        fontWeight: "500",
        color: "grey",
        marginTop: 40
    },
    inputText: {
        borderColor: "#E3E3E3",
        borderBottomWidth: 2,
        fontSize: 16,
        marginTop: 10
    },
    passwordText: {
        fontSize: 16,
        marginTop: 10,
        flex: 0.9
    },
    forgetText: {
        color: myColors.third,
        fontSize: 14,
        fontWeight: "500",
        textAlign: "right",
        marginTop: 15

    },
    tncText: {
        fontSize: 14,
        fontWeight: "400",
        color: myColors.third,
        marginTop: 15,
        letterSpacing: 0.7,
        lineHeight: 23,
        width: '95%',
        opacity: 0.7
    },
    Touchable: {
        backgroundColor: myColors.primary,
        marginTop: 30,
        height: 70,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    SignUpText: {
        fontSize: 19,
        color: myColors.secoundary,
        fontWeight: "500"
    },
    loginText: {
        fontSize: 15,
        fontWeight: 600,
        color: myColors.primary
    },
    alreadyAccountText: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        gap: 5
    }
})
export default Login