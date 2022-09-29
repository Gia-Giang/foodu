import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import HomeScreen from '../../screens/homeScreen';
import OrderScreen from '../../screens/OrderScreen';
import MessageScreen from '../../screens/MessageScreen';
import WalletScreen from '../../screens/WalletScreen';
import ProfileScreen from '../../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const MyBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1BAC4B',
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({color}) => (
            <AntDesign name="bars" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({color}) => (
            <AntDesign name="message1" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="WalletScreen"
        component={WalletScreen}
        options={{
          tabBarLabel: 'E-Wallet',
          tabBarIcon: ({color}) => (
            <Entypo name="wallet" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <AntDesign name="user" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyBottom;
