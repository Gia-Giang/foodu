import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import DisplayScreen from '../../screens/displayScreen';
import LoadingScreen from '../../screens/loading';
import WellcomeScreen from '../../screens/WellcomeScreen';
import SliderWellcome from '../../screens/sliderWellcome';
import LoginScreen from '../../screens/loginScreen';
import InfomationUserScreen from '../../screens/InfomationUserScreen';
import MyBottom from '../bottomNavigations';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="MyBottom" component={MyBottom} />
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="DisplayScreen" component={DisplayScreen} />
        <Stack.Screen name="WellcomeScreen" component={WellcomeScreen} />
        <Stack.Screen name="SliderWellcome" component={SliderWellcome} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="InfomationUserScreen"
          component={InfomationUserScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
