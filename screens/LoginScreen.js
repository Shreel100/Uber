import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useState, useEffect } from 'react'
import { auth } from '../firebase'
import tw from 'tailwind-react-native-classnames'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("LandingScreen")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView
    style = {styles.container}
    behavior = 'padding'
    >
    <View style={styles.inputContainer}>
    <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
    </View>

    <View style={styles.buttonContainer}>
        <TouchableOpacity 
        onPress={handleLogin}
        style={styles.button}>
            <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <View style={tw`flex flex-row`}>
          <Text >Don't have an account ? Click to </Text>
        <View>
          <TouchableOpacity 
          style={tw` flex-1`}
          onPress={() => navigation.navigate('LandingScreen')}>
          <Text style={tw`text-blue-600 font-bold underline `}>Register</Text>
          </TouchableOpacity>
        </View>
        </View>
    </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'White',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '60%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 10,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '50%',
        paddingHorizontal: 10,
        paddingVertical: 8,
        alignItems: 'center',
        marginBottom: 8,
      },
    buttonText: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16,
      }
})