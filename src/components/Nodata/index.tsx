import React from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Nodata = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, fontWeight: '700', marginVertical: 10}}>
        Bạn chưa đặt sản phẩm nào
      </Text>
      <Entypo name="dropbox" size={80} />
    </View>
  );
};

export default Nodata;
