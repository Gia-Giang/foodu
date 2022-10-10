import React, {useEffect, useMemo, useState, useCallback} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {actionGetData, actionChangeHeartFood} from '../../reduxs/actions';
import {styles} from '../../screens/homeScreen/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Andesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props {
  horizontal?: boolean;
  navigation: any;
}

const FlatLists = ({horizontal = true, navigation}: Props) => {
  const selector = useSelector((state: any) => ({
    listDataOutStandingFood: state.data.listDataOutStandingFood,
    outstandingFood: state.data.data?.outstandingFood,
  }));
  const [idFoodRecommended, setIdFoodRecommended] = useState<any>(-1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionGetData());
  }, []);
  const renderAllFood = useMemo(() => {
    return selector.listDataOutStandingFood.map((item: any) => {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate('DetailFoodScreen', item)}
          activeOpacity={0.9}
          key={item.id}
          style={[
            {
              height: 170,
              backgroundColor: 'white',
              marginBottom: 30,
              borderRadius: 25,
              padding: 20,
              flexDirection: 'row',
            },
          ]}>
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
              onPress={() => {
                dispatch(actionChangeHeartFood(item));
              }}
              style={{position: 'absolute', right: 0, bottom: 10}}>
              {item.isHeart ? (
                <Ionicons name="heart" size={30} color="#FE5F72" />
              ) : (
                <Ionicons name="heart-outline" size={30} color="#FE5F72" />
              )}
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      );
    });
  }, [selector?.listDataOutStandingFood]);
  const renderOutStandingFood = useMemo(() => {
    return (
      <FlatList
        contentContainerStyle={{marginTop: 20, paddingLeft: 15}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={selector?.outstandingFood}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailFoodScreen', item)}
              activeOpacity={0.8}
              key={index}
              style={styles.food}>
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
                  <Ionicons name="heart" size={20} color="#FE5F72" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    );
  }, [selector?.outstandingFood]);
  const renderFoodRecommended = ({item, index}: any) => {
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
  };

  return <>{horizontal ? renderAllFood : renderOutStandingFood}</>;
};

export default FlatLists;
