/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import ForYouList from './forYouList'; 
import Notification from './notification'; 
import Chat from './chat'; 
import Settings from './settings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ForYou({ navigation }) {

  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const Tab = createBottomTabNavigator();
  
  const onSubmit = () => { 
    navigation.navigate('VerifyWith')
  }
    return (   
    <Tab.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Tab.Screen
        name="For You"
        component={ForYouList}
        options={{
          tabBarLabel: 'For You',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <Icon name="chatbox-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <AntDesign name="setting" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator> 
    )
}

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', 
    marginTop: 35
  } 
})