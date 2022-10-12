import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import {actionAddOrder, actionListOrder} from '../../reduxs/actions';
import {styles} from './style';
import {Color} from '../../feather/Color';
import ModalOrder from './ModalOrder';

const DetailFoodScreen = ({navigation, route}: any) => {
  const [visible, setVisible] = useState<boolean>(false);
  const selector: any = useSelector((state: any) => ({
    listData: state.data.listData,
    listOrder: state.data.listOrder,
  }));
  const dispatch = useDispatch();
  const {width, height} = Dimensions.get('screen');
  const {params} = route;
  const newSelector = selector.listData.filter(
    (item: any) => item.categoryFood == params.categoryFood,
  );
  const handelModal = useCallback(() => {
    setVisible(!visible);
  }, [visible]);
  const handelAddFoodOrder = () => {
    dispatch(actionListOrder(params));
  };

  const itemqwe = [
    {
      id: 0,
      name: 'giang',
      age: 22,
      slotFood: 0,
    },
    {
      id: 1,
      name: 'tai',
      age: 22,
      slotFood: 0,
    },
    {
      id: 3,
      name: 'tuan',
      age: 22,
      slotFood: 0,
    },
  ];

  const renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity
        style={styles.item}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailFoodScreen', item)}>
        <Image
          resizeMode="cover"
          style={{width: '100%', height: 150, borderRadius: 30}}
          source={{
            uri: item?.uriImg,
          }}
        />
        <Text
          numberOfLines={2}
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            marginVertical: 5,
          }}>
          {item?.nameFood}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#1BAC4B'}}>
            {item?.price}
          </Text>
          <TouchableOpacity onPress={() => dispatch(actionAddOrder(item))}>
            <Octicons name="diff-added" size={25} color={Color.error} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color={Color.white} />
        </TouchableOpacity>
        <View style={styles.rightHeader}>
          <TouchableOpacity onPress={handelAddFoodOrder}>
            <Feather name="shopping-cart" size={25} color={Color.white} />
          </TouchableOpacity>
          <TouchableOpacity>
            {params.isHeart ? (
              <AntDesign name="heart" size={25} color={Color.error} />
            ) : (
              <AntDesign name="hearto" size={25} color={Color.white} />
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="send" size={25} color={Color.white} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <ImageBackground
          style={{height: height / 3}}
          source={{
            uri: params?.img || params?.uriImg,
          }}>
          <View style={styles.priceFood}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
              {params?.price}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.infomationFood}>
          <View style={styles.itemWrapper}>
            <Text
              style={{
                fontSize: 27,
                color: 'black',
                fontWeight: 'bold',
                width: 300,
              }}>
              {params?.name || params?.nameFood}
            </Text>
            <Entypo name="chevron-right" size={30} color={'black'} />
          </View>
          <View style={styles.line} />
          <View style={styles.itemWrapper}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AntDesign name="star" size={25} color="#F9A417" />
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: 'bold',
                  marginHorizontal: 10,
                }}>
                {params?.assess}
              </Text>
              <Text>({params?.reviewCount} reviews )</Text>
            </View>
            <Entypo name="chevron-right" size={30} color={'black'} />
          </View>
          <View style={styles.line} />
          <View style={styles.itemWrapper}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="md-location-sharp" size={25} color="#3CC669" />
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: 'bold',
                  marginHorizontal: 10,
                }}>
                {params?.distance}
              </Text>
              <Text style={{color: '#797A7B'}}>| </Text>
              <MaterialIcons name="motorcycle" size={25} color="#3CC669" />
              <Text style={{marginHorizontal: 10}}>{params?.shippingCost}</Text>
            </View>
            <Entypo name="chevron-right" size={30} color={'black'} />
          </View>
          <View style={styles.line} />
          <View style={styles.itemWrapper}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons name="sale" size={25} color="#3CC669" />
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: 'bold',
                  marginHorizontal: 10,
                }}>
                Mã giảm giá
              </Text>
            </View>
            <Entypo name="chevron-right" size={30} color={'black'} />
          </View>
          <View style={styles.line} />
        </View>
        <Text style={styles.title}>Cho Bạn</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={newSelector}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingVertical: 20,
            paddingHorizontal: 15,
          }}
        />
      </ScrollView>
      <ModalOrder
        onPress={handelModal}
        visible={visible}
        navigation={navigation}
      />
      <TouchableOpacity style={styles.cart} onPress={handelModal}>
        <AntDesign name="inbox" size={40} color={'red'} />
        <View style={styles.amountFood}>
          <Text style={{color: Color.white}}>{selector.listOrder.length}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default DetailFoodScreen;
