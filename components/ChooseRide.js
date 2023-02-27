import { Text, SafeAreaView, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { FlatList } from 'react-native'
import { Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlices'
import RideConfirmation from '../screens/RideConfirmation'

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
const [selected, setSelected] = useState(null)
const travelTimeInformation = useSelector(selectTravelTimeInformation)
const SURGE_CHARGE_RATE = 1.2

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
            style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
            onPress={() => navigation.navigate('NavigateCard')}>
            <Icon name='chevron-left' type='fontawesome' />
        </TouchableOpacity>
        <Text style = {tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
      </View>

        <FlatList
        
        data={data}
        renderItem={({ item: {id,title,multiplier,image}, item }) => 
        <TouchableOpacity 
        onPress={() => setSelected(item)}
        style={tw`flex-row justify-between items-center px-10 
        ${item.id === selected?.id && "bg-gray-200"}`}>
        <Image
        style = {{width: 115, height: 75, resizeMode: 'contain'}}
        source = {{uri: item.image}}/>
        <View style={tw`-ml-6`}>
          <Text style={tw`text-lg font-semibold`}>{item.title}</Text>
          <Text>{travelTimeInformation?.duration?.text}</Text>
        </View>
        <Text style={tw`text-lg`}>
          {new Intl.NumberFormat('en-cd', {
            style: 'currency',
            currency: 'CAD'
          }).format(
            (travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * multiplier)/100
          )}
          </Text>
        </TouchableOpacity>}
        keyExtractor={(item) => item.id}
        />
        <View>
          <TouchableOpacity 
          disabled={!selected}
          style={tw`bg-black py-3 ml-4 mr-4 ${!selected && "bg-gray-300"}`}
          onPress={() => navigation.navigate('RideConfirmation')}
          >
            <Text style={tw`text-center text-white text-xl`}>Book with {selected?.title}</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default ChooseRide



