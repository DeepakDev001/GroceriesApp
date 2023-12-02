import React, { useState } from 'react'
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { myColors } from '../Utils/MyColors'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { authentication } from '../../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
    const [userCrendetials, setUserCrendetials] = useState({
        username: "",
        email: "",
        password: ""
    })
    const { email, password } = userCrendetials
    const userCreate = () => {
        createUserWithEmailAndPassword(authentication, email, password)
            .then(() => {
                Alert.alert('User account created & signed in!');
                nav.navigate('Login');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    Alert.alert('That email address is invalid!');
                }

                console.error(error);
            });
    }
    const nav = useNavigation()
    const [isVisbile, setIsVisbile] = useState(true)
    //================ main_return_function ===========//
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: myColors.secoundary, }}>
            <StatusBar style='white' />
            <ScrollView style={{ flex: 1, paddingTop: 50, }}>
                <Image style={style.imgIcon}
                    source={require('../../assets/mainIcon.png')} />
                <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
                    <Text style={style.signupText}>Sign Up</Text>
                    <Text style={style.credentialsText}>Enter your credentials to continue</Text>
                    {/*======= Username ==========*/}
                    <Text style={style.userText}>Username</Text>
                    <TextInput
                        maxLength={9}
                        keyboardType="name-phone-pad"
                        style={style.inputText} />
                    {/*======= email ============*/}
                    <Text style={style.userText}>Email</Text>
                    <TextInput
                        value={email}
                        onChangeText={(val) => {
                            setUserCrendetials({ ...userCrendetials, email: val })
                        }}
                        keyboardType="email-address"
                        style={style.inputText} />
                    {/*======= password ==========*/}
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
                                setUserCrendetials({ ...userCrendetials, password: val })
                            }}
                            secureTextEntry={isVisbile}
                            maxLength={15}
                            keyboardType="ascii-capable"
                            style={style.passwordText}
                        />
                        <Ionicons
                            onPress={() => setIsVisbile(!isVisbile)}
                            name={isVisbile ? "eye-off-outline" : "eye-outline"}
                            size={24} color="black"
                        />
                    </View>
                    <Text style={style.tncText}>
                        By continuing you agree to our Terms of Service and  Privacy Policy
                    </Text>
                    <TouchableOpacity
                        onPress={userCreate}
                        style={style.Touchable}
                    >
                        <Text style={style.SignUpText}>SignUp</Text>
                    </TouchableOpacity>
                    <View style={style.alreadyAccountText}>
                        <Text style={{ fontSize: 16 }}>Already have an account?</Text>
                        <TouchableOpacity
                            onPress={() => {
                                nav.navigate('Login')
                            }}
                        >
                            <Text style={style.loginText}>Login now</Text>
                        </TouchableOpacity>

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
export default Signup