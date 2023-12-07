import React from 'react'
import { Image, Text, View } from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const HomeBanner = () => {

    //========== main_return_function ============//
    return (

        <View>
            <Image
                style={{ height: responsiveHeight(15), width: responsiveWidth(90), borderRadius: 10, }}
                source={require("../../assets/banner.png")}
            />
        </View>

    )
}

export default HomeBanner