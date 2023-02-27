import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import tw from 'tailwind-react-native-classnames'
import { auth } from '../firebase'
import { StyleSheet, TextInput, Text,View, SafeAreaView, Input,Button, TouchableOpacity } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { useEffect } from 'react'

const LandingScreen = () => {

const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')


  const navigation = useNavigation()
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen")
      })
      .catch(error => alert(error.message))
  }
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("HomeScreen")
      }
    })

    return unsubscribe
  }, [])


  return (    
        <SafeAreaView>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={tw`h-full justify-center m-auto`}
            >
            {/* <Text >Create an account !</Text> */}
            {/* <View style={tw`flex flex-row`}>
            <TextInput 
            placeholder='FirstName'
            style={tw`bg-gray-200 px-2 py-3 w-28 `}
            value={firstName}
            onChangeText={() => setFirstName(firstName)}
            />
            <TextInput 
            placeholder='LastName'
            style={tw`bg-gray-200 px-2 py-3 w-28 ml-4`}
            />
            </View> */}
            <TextInput 
            placeholder='Email'
            style={tw`bg-gray-200 px-2 py-3 w-60 mt-3`}
            value={email}
            onChangeText={text => setEmail(text)}
            /> 
            <TextInput 
            placeholder='Password'
            style={tw`bg-gray-200 px-2 py-3 w-60 mt-3`}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            /> 
            <TextInput 
            placeholder='Confirm Password'
            style={tw`bg-gray-200 px-2 py-3 w-60 mt-3`}
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            secureTextEntry
            /> 
            <TouchableOpacity style={tw`bg-blue-500 mt-4 py-2`}
            onPress={handleSignUp}
            >
            <Text style={tw`m-auto text-lg`}>Register</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>  
      )
    }

export default LandingScreen

const styles = StyleSheet.create({})