import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { myColors } from '../Utils/MyColors'

const ProjectTitle = ({ title }) => {

    //============ main_return_function =============//
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={style.ExclusiveText}>{title}</Text>
            <Text style={style.SeeAllText}>See all</Text>
        </View>
    )
}

//========= Style_Sheet

const style = StyleSheet.style = ({
    ExclusiveText: {
        fontSize: 20,
        fontWeight: 600
    },
    SeeAllText: {
        fontSize: 16,
        color: myColors.primary
    }
})

export default ProjectTitle