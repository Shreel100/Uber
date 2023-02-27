import { View, Text } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Maps from '../components/Maps'
import NavigateCard from '../components/NavigateCard'
import ChooseRide from '../components/ChooseRide'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RideConfirmation from './RideConfirmation'


const MapScreen = () => {
const Stack = createNativeStackNavigator();
  return (
    <KeyboardAvoidingView 
      style={tw`bg-white h-full flex-1`}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={tw`h-1/2`}>
        <Maps />
      </View>
      <View style={tw`h-1/2`}>
          <Stack.Navigator>
            <Stack.Screen 
            name='NavigateCard'
            component={NavigateCard}
            options={{
                headerShown: false        
            }}
            />
            <Stack.Screen 
            name='ChooseRide'
            component={ChooseRide}
            options={{
                headerShown: false        
            }}
            />
          </Stack.Navigator>
      </View>
    </KeyboardAvoidingView>
  )
}

export default MapScreen