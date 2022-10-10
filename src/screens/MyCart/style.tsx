import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  WrapperList: {
    flex: 1,
    marginTop: 20,
  },
  food: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 150,
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  imgFood: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  deleteFood: {
    position: 'absolute',
    right: 0,
    width: 200,
    height: 150,
    borderRadius: 30,
    paddingRight: 20,
    backgroundColor: '#F75555',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  infomationFood: {
    flex: 1,
    height: 120,
    justifyContent: 'space-between',
    paddingVertical: 5,
    marginLeft: 20,
  },
  distance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
