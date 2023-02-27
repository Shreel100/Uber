import { View, Text, SafeAreaView, Image, Button } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {GOOGLE_MAPS_APIKEY} from "@env"
import { setDestination, setOrigin } from '../slices/navSlices'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'
import { TouchableOpacity } from 'react-native'

const HomeScreen = () => {

const dispatch = useDispatch();
const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen")
      })
      .catch(error => alert(error.message))
  }

  return (
    <SafeAreaView style = {tw`bg-white h-full`}>
    <View style = {tw`p-5`} >
        <Image
      style = {{
        width: 100,
        height: 100,
        resizeMode: 'contain'
    }}
      source = {{
        uri: "http://links.papareact.com/gzs"
      }}/>
      <GooglePlacesAutocomplete 
      placeholder='Where From ?'
      styles = {{
        container: {
            flex: 0,
        },
        textInput: {
            fontSize:18,
        }
      }}
        onPress={(data,details = null ) => {
            dispatch(
                setOrigin({
                    location: details.geometry.location,
                    description: data.description,
                }),
            );
            dispatch(setDestination(null));
        }}
        fetchDetails = {true}
        returnKeyType={"search"}
        minLength={3}
        enablePoweredByContainer={false}
        query = {{
        key: GOOGLE_MAPS_APIKEY,
        language: 'en'
        }}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={40}
        />
      <NavOptions />
      <TouchableOpacity style={tw`bg-black w-28 py-1 ml-auto mr-auto mt-64 `}>
      <Button
        style={tw`bg-black`}
        onPress={handleSignOut}
        title="Sign Out"
        color="white"
        accessibilityLabel="Learn more about this purple button"
        />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

