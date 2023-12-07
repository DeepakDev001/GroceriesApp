import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { fruits } from '../Utils/Data'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { FontAwesome } from '@expo/vector-icons';
import { myColors } from '../Utils/MyColors';

const Product = () => {
    //============ main_return_function ==========//
    return (
        <View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={fruits}
                renderItem={({ item, index }) => (
                    <View style={style.FlatCard}>
                        <Image style={style.ProductImage} source={{ uri: item.img }} />
                        <View style={{ paddingHorizontal: 10, gap: 3 }}>
                            <Text style={{ fontSize: 18, fontWeight: 600 }}>
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                            </Text>
                            <Text style={{ color: 'grey' }}>{item.pieces} priceg</Text>
                            <View style={{
                                flexDirection: "row",
                                alignContent: "center",
                                justifyContent: "space-between",
                                marginTop: 10
                            }}>
                                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                                    ₹ {item.price}
                                </Text>
                                <Text>
                                    <FontAwesome name="plus-square" size={33} color={myColors.primary} />
                                </Text>

                            </View>

                        </View>

                    </View>
                )}
            />
        </View>
    )
}
// Style_Here

const style = StyleSheet.style = ({
    FlatCard: {
        borderRadius: 15,
        marginRight: 15,
        borderWidth: 2,
        borderColor: "#E3E3E3",
        height: responsiveHeight(28),
        width: responsiveWidth(45)
    },
    ProductImage: {
        height: 125,
        resizeMode: "contain"
    }
})


export default Product