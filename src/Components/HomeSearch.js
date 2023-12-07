import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { Feather } from '@expo/vector-icons';

const HomeSearch = () => {

    //============== main_return_function ==========//
    return (
        <View style={style.SrchView}>
            <Feather name="search" size={24} color="black" />
            <TextInput style={{ flex: 1 }} placeholder='Search Store' />
        </View>
    )
}

//========= StyleSheet_Here 
const style = StyleSheet.style = ({
    SrchView: {
        backgroundColor: "#E3E3E3",
        height: responsiveHeight(6.5),
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 10
    }
})

export default HomeSearch