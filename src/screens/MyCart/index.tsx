import React, {useState, useRef, useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SwipeListView} from 'react-native-swipe-list-view';

import ModalNoti from '../../components/ModalNoti';
import ModalConfig from '../../components/ModalConfig';
import {actionDeleteFoodMyCart} from '../../reduxs/actions';
import Nodata from '../../components/Nodata';
import {styles} from './style';

const MyCart = ({navigation}: any) => {
  const [visiable, setVisiable] = useState<boolean>(false);
  const [visiableModal, setVisiableModal] = useState<boolean>(false);
  const [itemFood, setItemFood] = useState<any>('');
  const selector = useSelector((state: any) =>
    state.data.myCart.map((item: any) => ({...item, key: item.id})),
  );
  const dispatch = useDispatch();
  const onSwipeValueChange = useCallback(
    async ({key, value}: any) => {
      if (-value > Dimensions.get('window').width / 4) {
        setItemFood(key);
        setVisiableModal(true);
      }
    },
    [visiableModal],
  );
  const handelDeleteSuccess = useCallback(async (key: any) => {
    setVisiable(true);
    await dispatch(actionDeleteFoodMyCart(key));
    setVisiable(false);
    setVisiableModal(false);
  }, []);
  const handelClose = useCallback(() => {
    setVisiableModal(false);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 22,
              marginLeft: 20,
              color: 'black',
            }}>
            My Cart
          </Text>
        </View>
        <Entypo name="dots-three-horizontal" size={30} color="black" />
      </View>
      {selector.length <= 0 && <Nodata />}
      <SwipeListView
        onSwipeValueChange={onSwipeValueChange}
        contentContainerStyle={{paddingHorizontal: 15, marginTop: 20}}
        disableRightSwipe
        data={selector}
        renderItem={(data: any, rowMap: any) => (
          <Animated.View style={[styles.food]}>
            <Image
              style={styles.imgFood}
              source={{
                uri: data?.item?.uriImg,
              }}
            />
            <View style={styles.infomationFood}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}
                numberOfLines={2}>
                {data?.item?.nameFood}
              </Text>
              <View style={styles.distance}>
                <Text>{data?.item?.assess} </Text>
                <AntDesign name="star" size={15} color="#FA9F18" />
                <Text> | 4 km</Text>
              </View>
              <Text
                style={{fontSize: 20, color: '#1BAC4B', fontWeight: 'bold'}}>
                {data?.item?.price}
              </Text>
            </View>
          </Animated.View>
        )}
        renderHiddenItem={(data, rowMap) => (
          <View style={styles.deleteFood}>
            <MaterialIcons name="delete" size={35} color="white" />
          </View>
        )}
        rightOpenValue={-80}
      />
      <ModalNoti text="Đã xóa thành công" visiable={visiable} />
      <ModalConfig
        item={itemFood}
        visible={visiableModal}
        handelDeleteSuccess={handelDeleteSuccess}
        handelClose={handelClose}
      />
    </View>
  );
};

export default MyCart;
