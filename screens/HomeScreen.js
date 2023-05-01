import { View, Text, Button, ScrollView, Image, StyleSheet, FlatList, TouchableOpacity, ImageBackground, Alert } from 'react-native'
import React, { useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo, Feather } from '@expo/vector-icons'
import tw from 'twrnc';
import discoverData from '../assets/data/discoverData';
import activitiesData from '../assets/data/activitiesData';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import learnMoreData from '../assets/data/learnMoreData';
import { StatusBar } from 'expo-status-bar';


Feather.loadFont()
Entypo.loadFont()
SplashScreen.preventAutoHideAsync();

const HomeScreen = ({ navigation }) => {

  const [fontsLoaded] = useFonts({
    'Lato-Bold': require('../assets/Fonts/Lato-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  const renderDiscoverItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details',{item:item})}>
        <ImageBackground source={item.imageBig} style={[tw`w-[170px] h-[250px] justify-end px-[10px] py-[15px] mr-[20px]`,{ marginLeft: item.id === "discover-1" ? 20 : 0 }]} imageStyle={tw`rounded-[20px]`} >
          <Text style={[tw`text-[18px] text-[#FBFCFE]`, { fontFamily: "Lato-Bold" }]}>{item.title}</Text>
          <View style={tw`flex-row items-center mt-[5px]`}>
            <Entypo name='location-pin' size={18} color="#FBFCFE" />
            <Text style={[tw`text-[#FBFCFE] text-[12px] ml-[5px]`, { fontFamily: "Lato-Bold" }]} >{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    )
  }

  const renderLearnMoreItem=({item})=>{
    return(
      <TouchableOpacity onPress={() =>Alert.alert('Panel Working')}>
        <ImageBackground source={item.image} style={[tw`w-[170px] h-[180px] justify-end px-[10px] py-[15px] mr-[20px]`,{ marginLeft: item.id === "learnMore-1" ? 20 : 0 }]} imageStyle={tw`rounded-[20px]`} >
          <Text style={[tw`text-[18px] text-[#FBFCFE]`, { fontFamily: "Lato-Bold" }]}>{item.title}</Text>
          
        </ImageBackground>
      </TouchableOpacity>
    )
  }

  const renderActivityItem = ({ item }) => {
    return (
      <View style={[tw`justify-end items-center mr-[20px]`, { marginLeft: item.id === "activities-1" ? 20 : 0 }]}>
        <Image source={item.image} resizeMode='contain' style={tw`w-[36px] h-[36px]`} />
        <Text style={[tw`mt-[5px] text-[14px] text-[#D1D3D2]`, { fontFamily: "Lato-Bold" }]}>{item.title}</Text>
      </View>
    )
  }
  return (
    <View style={tw`flex-1 bg-[#FBFCFE] pb-[30px]`} onLayout={onLayoutRootView}>
      <ScrollView>
        <SafeAreaView>
          <View style={tw`flex-row mx-5 mt-5 justify-between`}>
            <Feather name='menu' size={32} color="#0C0D0E" style={[tw``,{ fontFamily: "Lato-Bold" }]} />
            <Image source={require('../assets/Images/person.png')} style={tw`w-[52px] h-[52px] rounded-[10px]`} />
          </View>
        </SafeAreaView>

        <View style={tw`mt-5`}>
          <Text style={[tw`text-[32px] mx-5`, { fontFamily: "Lato-Bold" }]}>Discover</Text>
          <View style={tw`flex-row mt-5 justify-between mx-5`}>
            <Text style={[tw`text-[#F35D38] text-[16px]`, { fontFamily: "Lato-Bold" }]}>All</Text>
            <Text style={[tw`text-[#D1D3D2] text-[16px]`, { fontFamily: "Lato-Bold" }]}>Destination</Text>
            <Text style={[tw`text-[#D1D3D2] text-[16px]`, { fontFamily: "Lato-Bold" }]}>Cities</Text>
            <Text style={[tw`text-[#D1D3D2] text-[16px]`, { fontFamily: "Lato-Bold" }]}>Experiences</Text>
          </View>
          <View style={tw`mt-[20px]`}>
            <FlatList
              data={discoverData}
              renderItem={renderDiscoverItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        <View style={tw`mt-[20px]`}>
          <Text style={[tw`mx-5 text-[20px] text-[#0C0D0E]`, { fontFamily: "Lato-Bold" }]}>Activities</Text>
          <View style={tw`py-[20px]`}>
            <FlatList
              data={activitiesData}
              renderItem={renderActivityItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        <View style={tw`pb-[10px]`}>
          <Text style={[tw`text-[24px] mx-5`,{ fontFamily: "Lato-Bold" }]}>Learn More</Text>
          <View style={tw`py-[20px]`}>
            <FlatList
              data={learnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar style='auto' backgroundColor='#FBFCFE' />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})