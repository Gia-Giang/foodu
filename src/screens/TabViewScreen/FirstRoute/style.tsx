import React from 'react';
import {StyleSheet} from 'react-native';
import {Color} from '../../../feather/Color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    paddingHorizontal: 2,
  },
  food: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 2,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  infomation: {
    flex: 1,
    height: 100,
    paddingLeft: 20,
    justifyContent: 'space-between',
  },
  distance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalFood: {
    color: Color.green,
    fontSize: 20,
    fontWeight: 'bold',
  },
  statusWrapper: {
    borderWidth: 2,
    borderColor: '#F75655',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginLeft: 10,
    borderRadius: 8,
  },
});
