import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, Button, KeyboardAvoidingView, styles } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'
import { useDispatch } from 'react-redux'
import { selectDestination, setDestination } from '../slices/navSlices'
import {GOOGLE_MAPS_APIKEY} from "@env"
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'


const NavigateCard = () => {
const dispatch = useDispatch();
const navigation = useNavigation();
const destination = useSelector(selectDestination);


  return (
      <SafeAreaView style={tw`bg-white flex-1`}>
        <Text style={tw`text-center py-5 text-xl`}>Welcome Back !</Text>
        <SafeAreaView style={tw`border-t border-gray-200 flex-shrink h-full`}>
          <GooglePlacesAutocomplete 
            styles = {{
              container: {
                  flex: 0,
                  marginLeft: 20, // add left margin
                  marginRight: 20, // add right margin
              },
              textInput: {
                fontSize: 18,
                backgroundColor: '#f5f5f5', // light gray background
                borderWidth: 1,
                borderColor: '#ddd', // light gray border
                borderRadius: 5, // rounded corners
                paddingVertical: 12,
                paddingHorizontal: 10,
              }
            }}
            placeholder='Where to?' 
            fetchDetails={true}
            returnKeyValue={"search"}
            enablePoweredByContainer={false}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={40}
            onPress={(data,details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              )
            }}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en'
            }}
          />
        </SafeAreaView>
        <View style={tw`mt-auto ml-auto mr-auto`}>
          <TouchableOpacity style={tw`bg-black w-32 items-center py-1`} disabled={!destination}>
            <Button
              style={tw`bg-black`}
              onPress={() => navigation.navigate('ChooseRide')}
              title="Find a Ride !"
              color="#ffffff"
              accessibilityLabel="Learn more about this purple button"
              disabled={!destination}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  )
}

export default NavigateCard



