import React, {useState, useCallback} from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';
import {useFormikContext, FormikTouched} from 'formik';
import {styles} from './style';

interface Props {
  name: string;
  placeholder: string;
  children?: any;
}

const _ = require('lodash');

const TextInputs = ({name, placeholder, children}: Props) => {
  const {values, setFieldValue, errors, touched, setFieldTouched} =
    useFormikContext();
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const isError: any = _.get(errors, name, undefined);
  const isToucheds: any = _.get(touched, name, undefined);
  const isValue: any = _.get(values, name, undefined);

  const handelChange = (value: string) => {
    if (!isValue) {
      setFieldTouched(name, true);
    }
    setFieldValue(name, value);
  };
  const handelBlur = () => {
    setIsFocus(false);
  };
  const handelFocus = () => {
    setIsFocus(true);
  };
  return (
    <View
      style={{
        marginBottom: 20,
        width: Dimensions.get('screen').width,
        paddingHorizontal: 10,
      }}>
      <View
        style={[
          styles.container,
          isToucheds && isError && styles.inputError,
          isFocus && isValue && styles.inputFocus,
        ]}>
        {children}
        <TextInput
          keyboardType={name == 'phone' ? 'numeric' : 'default'}
          style={[styles.input]}
          placeholder={placeholder}
          onChangeText={handelChange}
          onBlur={handelBlur}
          onFocus={handelFocus}
          value={isValue}
        />
      </View>
      {isToucheds && isError && <Text style={{color: 'red'}}>{isError}</Text>}
    </View>
  );
};
export default TextInputs;
