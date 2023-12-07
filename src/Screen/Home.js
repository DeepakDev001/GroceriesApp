import React from 'react'
import { SafeAreaView } from 'react-native'
import HomeIcon from '../Components/HomeIcon'
import { StatusBar } from 'expo-status-bar'
import HomeSearch from '../Components/HomeSearch'
import HomeBanner from '../Components/HomeBanner'
import ProjectTitle from '../Components/ProjectTitle'
import Product from '../Components/Product'

const Home = () => {

  //=============== main_return_function ===========//
  return (
    <SafeAreaView style={{
      paddingHorizontal: 20,
      paddingTop: 50,
      flex: 1,
      gap: 20,
      backgroundColor: "white"
    }}>
      <StatusBar style='white' />
      <HomeIcon />
      <HomeSearch />
      <HomeBanner />
      <ProjectTitle title="Exclusive Offer" />
      <Product />
      <ProjectTitle title="Best Selling" />
    </SafeAreaView>
  )
}

export default Home