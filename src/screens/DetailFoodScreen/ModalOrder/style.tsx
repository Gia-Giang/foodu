import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
  },
  listFoodOrder: {
    height: (height / 100) * 70,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#F7F7F7',
  },
  food: {
    height: 100,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgFood: {
    width: 80,
    height: 80,
    backgroundColor: 'blue',
  },
  infomationFood: {
    flex: 1,
    height: 80,
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  titleFood: {},
  totalFood: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtend: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemSubtend: {
    borderWidth: 1,
    width: 25,
    height: 25,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
