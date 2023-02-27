import { Image, View, Text, FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlices';
// import { Icon } from 'react-native-elements';


const data = [
    {
        id:"1971",
        title:"Get a ride !",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id:"1973",
        title:"Order Food !",
        image: "https://links.papareact.com/28w",
        screen: "EatScreen"
    }
];

const NavOptions = () => {
const navigation = useNavigation();

const origin = useSelector(selectOrigin);
  return (
    <View>
      <FlatList 
      data = {data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <TouchableOpacity 
        onPress={() => navigation.navigate(item.screen)}
        style = {tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        disabled={!origin}
        >
          <View style={tw`${!origin && "opacity-20"}`}>
            <Image 
            style = {{width: 125, height: 125, resizeMode: "contain"}}
            source={{uri: item.image}}
            />
            <Text style = {tw`pl-4 mt-5 font-semibold`}>{item.title}</Text>
            {/* <Icon name = 'arrowright' color = 'white' type = 'antdesign'/> */}
          </View>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}

export default NavOptions;