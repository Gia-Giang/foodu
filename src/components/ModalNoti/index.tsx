import React, {useRef, useEffect, useState, useCallback} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';

interface Props {
  text: string;
  visiable: boolean;
}
const ModalNoti = ({text, visiable}: Props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (visiable) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      });
    }
  }, [visiable]);
  return (
    <Animated.View style={{opacity: fadeAnim}}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={{color: 'white'}}>{text}</Text>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    position: 'absolute',
    bottom: 10,
    padding: 10,
    backgroundColor: '#1BAB4A',
    borderRadius: 5,
  },
});
export default ModalNoti;
