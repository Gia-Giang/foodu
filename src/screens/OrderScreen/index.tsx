import React from 'react';
import {View, Text, TextInput} from 'react-native';
import axios from 'axios';

import {styles} from './style';
import Forms from '../../components/Forms';
import TextInputs from '../../components/TextInputs';
import {ButtomSubmit} from '../../components/ButtonSubmit';

const OrderScreen = () => {
  // axios.post('https://62e500f620afdf238d75b943.mockapi.io/listData', {
  //   nameFood: 'SASHIMI HÀU',
  //   uriImg: 'https://tokyodeli.com.vn/Data/Sites/3/Product/818/sashimi-hau.jpg',
  //   distance: '4.3km',
  //   assess: '4.4',
  //   reviewCount: Math.floor(Math.random() * 300),
  //   price: '155.000' + 'đ',
  //   shippingCost: '15.000 VND',
  //   isHeart: false,
  //   categoryFood: 'sashimi',
  // });
  const onSubmit = (value: any) => {
    console.log('value', value);
  };
  return (
    <View style={styles.container}>
      <Forms
        onSubmit={onSubmit}
        initialValues={{
          nameFood: '',
          uriImg: '',
          distance: '',
          assess: '',
          reviewCount: '',
          price: '',
          shippingCost: '',
          isHeart: false,
          categoryFood: '',
        }}>
        <TextInputs name="nameFood" placeholder={'nhap ten mon an'} />
        <TextInputs name="uriImg" placeholder={'uriImg'} />
        <TextInputs name="distance" placeholder={'distance'} />
        <TextInputs name="reviewCount" placeholder={'reviewCount'} />
        <TextInputs name="price" placeholder={'price'} />
        <TextInputs name="shippingCost" placeholder={'shippingCost'} />
        <TextInputs name="categoryFood" placeholder={'categoryFood'} />
        <ButtomSubmit />
      </Forms>
    </View>
  );
};

export default OrderScreen;
