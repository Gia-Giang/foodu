import React from 'react';
import {StyleSheet} from 'react-native';
import {Color} from '../../feather/Color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 1000,
  },
  rightHeader: {
    minWidth: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infomationFood: {
    flexDirection: 'column',
    marginHorizontal: 15,
    marginTop: 10,
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#F0F0F1',
    marginVertical: 15,
  },
  title: {
    fontSize: 23,
    fontWeight: '700',
    color: Color.black,
    marginHorizontal: 15,
  },
  item: {
    width: 200,
    minHeight: 250,
    backgroundColor: 'white',
    marginRight: 20,
    borderRadius: 30,
    padding: 15,
    elevation: 2,
  },
  priceFood: {
    position: 'absolute',
    bottom: 20,
    left: 15,
  },
  cart: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  amountFood: {
    position: 'absolute',
    right: -5,
    top: -5,
    padding: 2,
    borderRadius: 20,
    backgroundColor: 'red',
  },
});
