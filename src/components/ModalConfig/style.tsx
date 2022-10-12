import React from 'react';
import {StyleSheet} from 'react-native';
import {Color} from '../../feather/Color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overPlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.2,
  },
  modal: {
    width: '55%',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  confirm: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnConfirm: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: Color.green,
    marginHorizontal: 5,
    borderRadius: 10,
  },
});
