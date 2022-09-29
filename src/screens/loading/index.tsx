import React, {useState, useEffect} from 'react';
import {View, StatusBar, Text, Image} from 'react-native';
import {Circle} from 'react-native-animated-spinkit';

import {styles} from './style';
import {dataImages} from '../../assets/images';
const LoadingScreen = ({navigation}: any) => {
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('WellcomeScreen');
    }, 2000);
  }, []);
  return (
    <View style={styles.wrapperLoading}>
      <Image
        style={{width: 100, height: 100}}
        resizeMode="contain"
        source={{
          uri: dataImages.logo,
        }}
      />
      <View style={{position: 'absolute', bottom: 30}}>
        <Circle color="red" size={50} animating={isLoading} />
      </View>
    </View>
  );
};

export default LoadingScreen;
