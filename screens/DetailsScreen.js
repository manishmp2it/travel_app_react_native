import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const height = Dimensions.get('window').height;
Entypo.loadFont();

const DetailsScreen = ({ route, navigation }) => {

  const { item } = route.params

  return (
    <View style={[tw`flex-1 bg-white`]}>
      <ImageBackground source={item.imageBig} style={[tw``, styles.backgroundImage]} imageStyle={tw``}>

        <TouchableOpacity style={tw`mt-[60px] ml-[20px]`} onPress={() => navigation.goBack()}>
          <Entypo name='chevron-left' size={32} color="#FBFCFE" />
        </TouchableOpacity>
        <View style={tw`mx-[20px] mb-[40px]`}>
          <Text style={[tw`text-[32px] text-[#FBFCFE]`, { fontFamily: "Lato-Bold" }]}>{item.title}</Text>
          <View style={tw`flex-row items-center mt-[10px]`}>
            <Entypo name='location-pin' size={24} color="#FBFCFE" />
            <Text style={[tw`text-[#FBFCFE] ml-0.5 text-[16px]`, { fontFamily: "Lato-Bold" }]}>{item.location}</Text>
          </View>
        </View>

      </ImageBackground>
      <View style={[tw`bg-white flex-1 mt-[-20px] rounded-[20px]`]}>
        <View style={[tw`absolute top-[-30px] right-[40px] w-[64px] h-[64px] rounded-full items-center justify-center bg-[#FBFCFE]`, styles.dropShadow]}>
          <Entypo name='heart' size={32} color="#F35D38" />
        </View>
        <View style={tw`mx-[20px] mt-[20px]`}>
          <Text style={[tw`text-[24px] text-[#0C0D0E]`, { fontFamily: "Lato-Bold" }]}>Description</Text>
          <Text style={[tw`text-[16px] text-[#C4C4C4] mt-[20px]`, { fontFamily: "Lato-Bold" }]}>{item.description}</Text>
        </View>
        <View style={tw`mx-[20px] mt-[20px] flex-row justify-between`}>

          <View >
            <Text style={[tw`text-[#D1D3D2] text-[12px]`, { fontFamily: "Lato-Bold" }]}>PRICE</Text>
            <View style={tw`flex-row items-end mt-[5px]`}>
              <Text style={[tw`text-[24px] text-[#F35D38]`, { fontFamily: "Lato-Bold" }]}>${item.price}</Text>
              <Text style={tw`text-[#D1D3D2]`}>/person</Text>
            </View>
          </View>

          <View>
            <Text style={[tw`text-[#D1D3D2] text-[12px]`, { fontFamily: "Lato-Bold" }]}>RATING</Text>
            <View style={tw`flex-row items-end mt-[5px]`}>
              <Text style={[tw`text-[24px] text-[#F35D38]`, { fontFamily: "Lato-Bold" }]}>{item.rating}</Text>
              <Text style={tw`text-[#D1D3D2]`}>/5</Text>
            </View>
          </View>

          <View>
            <Text style={[tw`text-[#D1D3D2] text-[12px]`, { fontFamily: "Lato-Bold" }]}>DURATION</Text>
            <View style={tw`flex-row items-end mt-[5px]`}>
              <Text style={[tw`text-[24px] text-[#F35D38]`, { fontFamily: "Lato-Bold" }]}>{item.duration}</Text>
              <Text style={tw`text-[#D1D3D2]`}>/hours</Text>
            </View>
          </View>

        </View>
        <TouchableOpacity style={tw`bg-[#F35D38] mx-[20px] mt-[30px] py-[15px] items-center rounded-[10px]`} onPress={()=>Alert.alert("You booked a trip!")}>
          <Text style={[tw`text-[#fff] text-[18px] `,{fontFamily: "Lato-Bold"}]}>Book Now</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style='light' />
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  backgroundImage: {
    height: height * 0.6,
    justifyContent: 'space-between'
  },
  dropShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
})