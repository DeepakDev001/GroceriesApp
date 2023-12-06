import React from 'react'
import { SafeAreaView } from 'react-native'
import HomeIcon from '../Components/HomeIcon'
import { StatusBar } from 'expo-status-bar'
import HomeSearch from '../Components/HomeSearch'

const Home = () => {

  //=============== main_return_function ===========//
  return (
    <SafeAreaView style={{ paddingHorizontal: 20, paddingTop: 50 }}>
      <StatusBar style='white' />
      <HomeIcon />
      <HomeSearch />
    </SafeAreaView>
  )
}

export default Home