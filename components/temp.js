import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { FlatList } from 'react-native'
import { Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id:'Uber-X-123',
    title: 'UberX',
    multiplier: 1,
    image: "https://links.papareact.com/3pn"
  },
  {
    id:'Uber-XL-456',
    title: 'Uber XL',
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8"
  },
  {
    id:'Uber-LUX-789',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  },
];

const ChooseRide = () => {
const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
            style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
            onPress={() => navigation.navigate('NavigateCard')}>
            <Icon name='chevron-left' type='fontawesome' />
        </TouchableOpacity>
        <Text style = {tw`text-center py-5 text-xl`}>Select a Ride</Text>
      </View>

        <FlatList
        data={data}
        renderItem={({ item }) => <Image
        style = {{width: 100, height: 100, resizeMode: 'contain'}}
        source = {{uri: item.image}}/>}
        keyExtractor={(item) => item.id}
        />
    </SafeAreaView>
  )
}

export default ChooseRide

const styles = StyleSheet.create({})