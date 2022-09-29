import React, {useRef} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import * as yup from 'yup';
import {Formik, useFormikContext} from 'formik';

import Forms from '../../components/Forms';
import {ButtomSubmit} from '../../components/ButtonSubmit';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TextInputs from '../../components/TextInputs';
import {dataImages} from '../../assets/images';

interface Props {
  name: string;
  phone: string;
  email: string;
}

const ValidationSchema = yup.object().shape({
  name: yup
    .string()
    .max(15, 'Ko được viết quá 15 ký tự')
    .required('Vui lòng ko để trống trường này'),
  phone: yup.string().required('Vui lòng ko để trống trường này'),
  email: yup.string().required('Vui lòng ko để trống trường này'),
});
const LoginScreen = ({navigation}: any) => {
  const refForm: any = useRef();
  const handleSubmit = (e: any) => {
    navigation.navigate('InfomationUserScreen');
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TouchableOpacity
        style={{marginTop: 40, width: 40}}
        onPress={() => navigation.navigate('SliderWellcome')}>
        <Feather name="arrow-left" size={40} />
      </TouchableOpacity>
      <View
        style={{
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Image
          style={{width: 100, height: 100}}
          resizeMode="contain"
          source={{
            uri: dataImages.logo,
          }}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'orange',
            marginVertical: 20,
          }}>
          Create New Account
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <Forms
          initialValues={{
            name: '',
            phone: '',
            email: '',
          }}
          ref={refForm}
          validationSchema={ValidationSchema}
          onSubmit={handleSubmit}>
          <TextInputs name="name" placeholder="Nhập tên">
            <AntDesign name="star" size={20} color="#9E9E9E" />
          </TextInputs>
          <TextInputs name="phone" placeholder="Nhập sdt">
            <AntDesign name="star" size={20} color="#9E9E9E" />
          </TextInputs>
          <TextInputs name="email" placeholder="Nhập email">
            <AntDesign name="mail" size={20} color="#9E9E9E" />
          </TextInputs>
          <ButtomSubmit />
        </Forms>
        {/* <Formik
          innerRef={refForm}
          onSubmit={(value: Props) => console.log('value', value)}
          validationSchema={ValidationSchema}
          initialValues={{
            name: '',
            phone: '',
            email: '',
          }}>
          {({handleBlur, handleChange, handleReset, handleSubmit}) => {
            return (
              <>
                <TextInputs name="name" placeholder="Nhập tên">
                  <AntDesign name="star" size={20} color="#9E9E9E" />
                </TextInputs>
                <TextInputs name="phone" placeholder="Nhập sdt">
                  <AntDesign name="star" size={20} color="#9E9E9E" />
                </TextInputs>
                <TextInputs name="email" placeholder="Nhập email">
                  <AntDesign name="mail" size={20} color="#9E9E9E" />
                </TextInputs>
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={{
                    width: 100,
                    height: 40,
                    backgroundColor: 'orange',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                  }}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>
                    Đăng nhập
                  </Text>
                </TouchableOpacity>
              </>
            );
          }}
        </Formik> */}
      </View>
    </View>
  );
};

export default LoginScreen;
