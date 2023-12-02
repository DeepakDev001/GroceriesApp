import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { myColors } from '../Utils/MyColors'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const nav = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            nav.replace("Signup")
        }, 5000)
    }, [])

    //================ main_return_function ===========//
    return (
        <View style={{
            backgroundColor: myColors.primary,
            flex: 1,
            justifyContent: "center",
        }}>
            <StatusBar style='light' />
            <View style={style.viewContainer}>
                <Image style={style.imgIcon} source={require('../../assets/mainIcon.png')} />
                <View>
                    <Text style={style.textNectar}>nectar</Text>
                    <Text style={style.textNectarChild}>online groceries</Text>
                </View>
            </View>
        </View>
    )
}
//========== Style_Sheet

const style = StyleSheet.style = ({
    viewContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 15
    },
    imgIcon: {
        tintColor: "white",
        height: 75,
        width: 65
    },
    textNectar: {
        fontSize: 75,
        color: myColors.secoundary
    },
    textNectarChild: {
        fontSize: 15,
        color: myColors.secoundary,
        textAlign: "center",
        letterSpacing: 6,
        top: -10
    }

})
export default Splash