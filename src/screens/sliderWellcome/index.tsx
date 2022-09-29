import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {dataImages} from '../../assets/images';
import {ScrollView} from 'react-native-gesture-handler';
import Slider from '../../components/slider';

const SliderWellcome = ({navigation}: any) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Slider
        data={dataImages.slidePizza}
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </View>
  );
};

export default SliderWellcome;
