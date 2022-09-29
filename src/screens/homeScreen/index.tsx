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
import {actionGetData, actionChangeHeartFood} from '../../reduxs/actions';
import {styles} from './style';

const HomeScreen = ({navigation, params}: any) => {
  useEffect(() => {
    dispatch(actionGetData());
  }, []);
  const selector = useSelector((state: any) => ({
    loading: state.data.loading,
    data: state.data.data,
    listData: state.data.listData,
  }));
  const dispatch = useDispatch();
  const [idFoodRecommended, setIdFoodRecommended] = useState<any>(-1);
  const [idFood, setIdFood] = useState<string>('');
  const renderFoodRecommended = useCallback(
    ({item, index}: any) => {
      return (
        <TouchableOpacity
          key={index}
          style={[
            styles.foodRecommended,
            idFoodRecommended == index && {backgroundColor: '#1BAC4B'},
          ]}
          onPress={() => setIdFoodRecommended(index)}>
          <Image
            style={{width: 27, height: 27, marginRight: 5}}
            source={{
              uri: item.icon,
            }}
          />
          <Text
            style={{
              fontWeight: 'bold',
              color: idFoodRecommended == index ? 'white' : '#1BAC4B',
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    },
    [idFoodRecommended],
  );
  const FoodRecommended = () => {
    useMemo(() => {
      (a: any) => console.log(a);
    }, [idFoodRecommended]);
  };
  const renderAllFood = (listData: []) => {
    return listData.map((item: any) => {
      return (
        <View
          key={item.id}
          style={{
            height: 170,
            backgroundColor: 'white',
            marginBottom: 30,
            borderRadius: 25,
            padding: 20,
            flexDirection: 'row',
          }}>
          <Image
            style={{
              width: 150,
              height: '100%',
              backgroundColor: 'blue',
              borderRadius: 25,
            }}
            source={{uri: item.uriImg}}
          />
          <View
            style={{
              flex: 1,
              paddingLeft: 10,
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <Text
              numberOfLines={2}
              style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
              {item.nameFood}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text>{item.distance} | </Text>
              <Andesign name="star" color="orange" size={16} />
              <Text> {item.assess} </Text>
              <Text>({item.reviewCount})</Text>
            </View>
            <View>
              <Text style={styles.priceFood}>{item.price}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <MaterialIcons
                name="delivery-dining"
                color={'#1BAC4B'}
                size={20}
              />
              <Text>{item.shippingCost}</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                dispatch(
                  actionChangeHeartFood({
                    id: item.id,
                    dataFood: item,
                  }),
                )
              }
              style={{position: 'absolute', right: 0, bottom: 10}}>
              {item.isHeart ? (
                <Ionicons name="heart" size={30} color="#FE5F72" />
              ) : (
                <Ionicons name="heart-outline" size={30} color="#FE5F72" />
              )}
            </TouchableOpacity>
          </View>
        </View>
      );
    });
  };
  const AllFood = useMemo(() => {
    return renderAllFood(selector?.listData);
  }, [selector]);
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
              <Feather name="shopping-bag" size={30} color={'black'} />
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
          {selector?.data?.foodList?.map((item: any, index: any) => {
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
        <FlatList
          contentContainerStyle={{marginTop: 20, paddingLeft: 15}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={selector?.data?.outstandingFood}
          renderItem={({item, index}) => {
            return (
              <View key={index} style={styles.food}>
                <Image
                  resizeMode="cover"
                  style={styles.imgFood}
                  source={{
                    uri: item.img,
                  }}
                />
                <Text style={styles.nameFood}>{item.name}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text>{item.distance} | </Text>
                  <Andesign name="star" color="orange" size={16} />
                  <Text> {item.assess} </Text>
                  <Text>({item.reviewCount})</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 5,
                  }}>
                  <Text style={styles.priceFood}>{item.price}</Text>
                  <Text> | </Text>
                  <MaterialIcons
                    name="delivery-dining"
                    color={'#1BAC4B'}
                    size={20}
                  />
                  <Text>{item.shippingCost}</Text>
                  <TouchableOpacity>
                    {idFood == item.img && item.heart ? (
                      <Ionicons name="heart" size={20} color="#FE5F72" />
                    ) : (
                      <Ionicons
                        name="heart-outline"
                        size={20}
                        color="#FE5F72"
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={{paddingHorizontal: 15}}>
        {renderTitle('Món ăn đề xuất')}
      </View>
      <View style={styles.listRecommended}>
        <FlatList
          contentContainerStyle={{paddingLeft: 15}}
          ListHeaderComponent={() => (
            <TouchableOpacity
              onPress={() => setIdFoodRecommended(-1)}
              style={[
                styles.foodRecommended,
                {
                  backgroundColor:
                    idFoodRecommended == -1 ? '#1BAC4B' : 'white',
                },
              ]}>
              <View
                style={{
                  width: 27,
                  height: 27,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: idFoodRecommended == -1 ? 'white' : '1BAC4B',
                  }}>
                  All
                </Text>
              </View>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={selector?.data?.foodList}
          renderItem={renderFoodRecommended}
        />
      </View>
      <View
        style={{paddingHorizontal: 15, marginTop: 30, alignItems: 'center'}}>
        {!selector.loading ? (
          AllFood
        ) : (
          <Animated.CircleFade size={40} color="#1BAC4B" />
        )}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
