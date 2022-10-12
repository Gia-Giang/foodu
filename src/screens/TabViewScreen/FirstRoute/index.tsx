import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Modal} from 'react-native';

import Nodata from '../../../components/Nodata';
import {styles} from './style';

const FirstRoute = () => {
  const selector = useSelector((state: any) =>
    state?.data?.listOrderTransport?.filter(
      (item: any) => item.status == 'Active',
    ),
  );
  return (
    <ScrollView>
      <View style={styles.container}>
        {selector.length <= 0 && <Nodata />}
        {selector.map((item: any) => {
          return (
            <View style={styles.food} key={item.id}>
              <Image source={{uri: item?.uriImg}} style={styles.img} />
              <View style={styles.infomation}>
                <Text
                  style={{fontSize: 18, fontWeight: '900', color: 'black'}}
                  numberOfLines={2}>
                  {item?.nameFood}
                </Text>
                <View style={styles.distance}>
                  <Text>{item?.repeat} món | </Text>
                  <Text>{item?.distance}</Text>
                </View>
                <View style={styles.totalWrapper}>
                  <Text style={styles.totalFood}>{item?.price}</Text>
                  <View style={styles.statusWrapper}>
                    <Text
                      style={{
                        color: '#F75655',
                        fontSize: 12,
                        fontWeight: '900',
                      }}>
                      {item?.status}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default FirstRoute;
