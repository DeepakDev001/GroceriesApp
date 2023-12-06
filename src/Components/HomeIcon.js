import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native'

const HomeIcon = () => {

    //============= main_return_function ============//
    return (
        <SafeAreaView>
            <Image style={style.imgIcon}
                source={require('../../assets/mainIcon.png')} />
            <Text style={style.TextStyle} >Bhopal, Madhay Pradesh</Text>
        </SafeAreaView>
    )
}
//========= style_Sheet

const style = StyleSheet.style = ({
    imgIcon: {
        height: 75,
        width: 65,
        alignSelf: "center",
    },
    TextStyle: {
        alignSelf: "center",
        marginTop: 10,
        fontSize: 20,
        fontWeight: 500,
        color: "gray"
    }
})
export default HomeIcon