import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import {dataImages} from '../../assets/images';
const WellcomeScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{flex: 1}}
        activeOpacity={1}
        onPress={() => navigation.navigate('SliderWellcome')}>
        <StatusBar hidden />
        <ImageBackground
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}
          source={{uri: dataImages.pizza}}
          resizeMode="cover">
          <View style={{marginBottom: 70, alignItems: 'center'}}>
            <Text
              style={{
                color: '#3AC969',
                fontSize: 35,
                fontWeight: 'bold',
                marginBottom: 20,
              }}>
              Welcome to FOODU
            </Text>
            <Text style={{color: 'white'}}>
              Printers supplied by reliable manufacturersdffdsfds
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default WellcomeScreen;
