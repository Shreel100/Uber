
import { StyleSheet, KeyboardAvoidingView, Platform,View } from 'react-native';
import { Provider } from 'react-redux';
import LoginScreen from './screens/LoginScreen';
import LandingScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { store } from "./store";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tw from 'tailwind-react-native-classnames'
import RideConfirmation from './screens/RideConfirmation';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <View style={tw`flex h-full`}>
              <Stack.Navigator>
              <Stack.Screen 
                name = 'LoginScreen'
                component={LoginScreen}
                options={{
                  headerShown: false
                }}
                />
                <Stack.Screen 
                name = 'LandingScreen'
                component={LandingScreen}
                options={{
                  headerShown: false
                }}
                />
                <Stack.Screen 
                name = 'HomeScreen'
                component={HomeScreen}
                options={{
                  headerShown: false
                }}
                />
                <Stack.Screen 
                name = 'MapScreen'
                component={MapScreen}
                options={{
                  headerShown: false
                }}
                />
                <Stack.Screen 
                name = 'RideConfirmation'
                component={RideConfirmation}
                options={{
                  headerShown: false
                }}
                />
              </Stack.Navigator>
            </View>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
