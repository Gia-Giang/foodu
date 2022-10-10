import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 60,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 50,
  },
  infomation: {
    flex: 1,
    marginHorizontal: 10,
    height: 60,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  wrapperNoti: {
    flexDirection: 'row',
  },
  noti: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#EDEEF1',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  isNoti: {
    width: 15,
    height: 15,
    backgroundColor: 'red',
    position: 'absolute',
    borderRadius: 10,
    top: 5,
    right: 0,
  },
  search: {
    marginTop: 30,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputSearch: {
    paddingLeft: 20,
    fontSize: 20,
    color: 'black',
  },
  wrapperTitle: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  banner: {
    marginTop: 30,
    height: 200,
    elevation: 10,
    borderRadius: 40,
    overflow: 'hidden',
  },
  iconFood: {
    width: '25%',
    marginTop: 20,
    alignItems: 'center',
  },
  iconFoodList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  food: {
    width: width / 2,
    height: 270,
    marginRight: 20,
    borderRadius: 20,
    padding: 15,
    backgroundColor: 'white',
  },
  imgFood: {
    width: '100%',
    height: 150,
    borderRadius: 20,
  },
  nameFood: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 5,
  },
  priceFood: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1BAC4B',
  },
  listRecommended: {
    marginTop: 20,
  },
  foodRecommended: {
    borderWidth: 2,
    borderColor: '#1BAC4B',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
