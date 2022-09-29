import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import * as yup from 'yup';
import DateTimePicker from '@react-native-community/datetimepicker';

import Forms from '../../components/Forms';
import TextInputs from '../../components/TextInputs';
import {ButtomSubmit} from '../../components/ButtonSubmit';
import Avatar from '../../components/Avatar';

const Schema = yup.object().shape({
  fullName: yup.string().required('Trường này ko được để trống'),
  nickName: yup.string().required('Trường này ko được để trống'),
  birth: yup.string().required('Trường này ko được để trống'),
  email: yup.string().required('Trường này ko được để trống'),
  phone: yup.string().required('Trường này ko được để trống'),
  gender: yup.string().required('Trường này ko được để trống'),
});
const InfomationUserScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={30} />
        </TouchableOpacity>
        <Text
          style={{
            marginHorizontal: 10,
            fontWeight: 'bold',
            color: 'black',
            fontSize: 20,
          }}>
          Nhập thông tin người dùng
        </Text>
      </View>
      <ScrollView style={{backgroundColor: 'white', flex: 1}}>
        <View style={{paddingBottom: 10}}>
          <Forms
            validationSchema={Schema}
            onSubmit={() => navigation.navigate('MyBottom')}
            initialValues={{
              fullName: '',
              nickName: '',
              birth: '',
              email: '',
              phone: '',
              gender: '',
              avatar: '',
            }}>
            <Avatar name="avatar" />
            <TextInputs name="fullName" placeholder="fullName" />
            <TextInputs name="nickName" placeholder="nickName" />
            <TextInputs name="birth" placeholder="birth" />
            <TextInputs name="email" placeholder="email" />
            <TextInputs name="phone" placeholder="phone" />
            <TextInputs name="gender" placeholder="gender" />
            <ButtomSubmit
              textBtn="Tiếp tục"
              styles={{
                height: 60,
                borderRadius: 50,
                backgroundColor: '#29974D',
              }}
            />
          </Forms>
        </View>
      </ScrollView>
    </View>
  );
};

const {width, height} = Dimensions.get('screen');
export default InfomationUserScreen;
