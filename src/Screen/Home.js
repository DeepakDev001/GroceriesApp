import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import HomeIcon from '../Components/HomeIcon'
import HomeSearch from '../Components/HomeSearch'
import HomeBanner from '../Components/HomeBanner'
import ProjectTitle from '../Components/ProjectTitle'
import Product from '../Components/Product'


const Home = () => {

  //=============== main_return_function ===========//
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: "white"
    }}>
      <View style={{
        paddingTop: 50,
        paddingHorizontal: 20,
        gap: 20
      }}>
        <HomeIcon />
        <HomeSearch />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: 20,
        }}>
        <View style={{ gap: 20, paddingBottom: 35 }}>
          <HomeBanner />
          <ProjectTitle title="Exclusive Offer" />
          <Product />
          <ProjectTitle title="Best Selling" />
          <Product />
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Home