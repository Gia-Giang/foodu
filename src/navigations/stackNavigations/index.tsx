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
import DetailFoodScreen from '../../screens/DetailFoodScreen';
import MyCart from '../../screens/MyCart';
import MyBottom from '../bottomNavigations';
import FirstRoute from '../../screens/TabViewScreen/FirstRoute';
import OrderScreen from '../../screens/OrderScreen';

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
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="DetailFoodScreen" component={DetailFoodScreen} />
        <Stack.Screen
          name="InfomationUserScreen"
          component={InfomationUserScreen}
        />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
