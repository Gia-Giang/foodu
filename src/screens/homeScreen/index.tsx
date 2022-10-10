import React, {useEffect, useState, useMemo, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Andesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import * as Animated from 'react-native-animated-spinkit';

import {GET_DATA, CHANGE_HEART_FOOD} from '../../reduxs/contains';
import {
  actionGetData,
  actionChangeHeartFood,
  actionChosseOutStandingFood,
} from '../../reduxs/actions';
import FlatLists from '../../components/FlatList';
import RenderFoodRecommended from '../../components/renderFoodRecommended';
import {styles} from './style';

const HomeScreen = ({navigation, params}: any) => {
  useEffect(() => {
    dispatch(actionGetData());
  }, []);
  const selector = useSelector((state: any) => ({
    loading: state.data.loading,
    foodList: state.data?.foodList,
  }));
  const dispatch = useDispatch();

  const renderTitle = (title: string) => {
    return (
      <View style={styles.wrapperTitle}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          {title}
        </Text>
        <TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#1BAC4B'}}>
            Xem tất cả
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const chooseOutStanding = useCallback(async (nameOutStandingFood: any) => {
    await dispatch(actionChosseOutStandingFood(nameOutStandingFood));
  }, []);
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: 50}}>
      <View style={{paddingHorizontal: 15}}>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={{
              uri: '#',
            }}
          />
          <View style={styles.infomation}>
            <Text>name</Text>
            <Text>Noi o</Text>
          </View>
          <View style={styles.wrapperNoti}>
            <View style={styles.noti}>
              <Ionicons
                name="notifications-outline"
                size={30}
                color={'black'}
              />
              <View style={styles.isNoti} />
            </View>
            <View style={styles.noti}>
              <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
                <Feather name="shopping-bag" size={30} color={'black'} />
              </TouchableOpacity>
              <View style={styles.isNoti} />
            </View>
          </View>
        </View>
        <View style={styles.search}>
          <TouchableOpacity>
            <Andesign name="search1" size={30} color="#BBBBBC" />
          </TouchableOpacity>
          <TextInput
            placeholder="Bạn muốn ăn gì ?"
            style={styles.inputSearch}
            placeholderTextColor="#BBBBBC"
          />
        </View>
        {renderTitle('Sản phẩm')}
        <View style={styles.banner}>
          <Image
            style={{flex: 1}}
            resizeMode="cover"
            source={{
              uri: 'https://media.foody.vn/res/g69/685777/prof/s/image-9cb030c4-211022214115.jpeg',
            }}
          />
        </View>

        <View style={styles.iconFoodList}>
          {selector?.foodList?.map((item: any, index: any) => {
            return (
              <TouchableOpacity style={styles.iconFood} key={index}>
                <Image
                  resizeMode="contain"
                  style={{height: 50, width: 50}}
                  source={{
                    uri: item.icon,
                  }}
                />
                <Text style={{fontWeight: 'bold', color: 'black'}}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        {renderTitle('Món ăn nổi bật')}
      </View>
      <View style={{flex: 1}}>
        <FlatLists horizontal={false} navigation={navigation} />
      </View>
      <View style={{paddingHorizontal: 15}}>
        {renderTitle('Món ăn đề xuất')}
      </View>
      <View style={styles.listRecommended}>
        <RenderFoodRecommended chooseOutStanding={chooseOutStanding} />
      </View>
      <View
        style={{paddingHorizontal: 15, marginTop: 30, alignItems: 'center'}}>
        {!selector.loading ? (
          <FlatLists navigation={navigation} />
        ) : (
          <Animated.CircleFade size={40} color="#1BAC4B" />
        )}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
