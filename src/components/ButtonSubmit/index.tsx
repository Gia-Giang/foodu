import React from 'react';
import {TouchableOpacity, Text, ViewStyle, View} from 'react-native';
import {useFormikContext} from 'formik';

interface Props {
  styles?: ViewStyle;
  textBtn?: string;
}
export const ButtomSubmit = ({styles, textBtn = 'Đăng nhập'}: Props) => {
  const {handleSubmit, isSubmitting} = useFormikContext();
  return (
    <View style={{paddingHorizontal: 10}}>
      <TouchableOpacity
        onPress={handleSubmit}
        style={[
          {
            padding: 15,
            backgroundColor: 'orange',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          },
          styles,
        ]}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>{textBtn}</Text>
      </TouchableOpacity>
    </View>
  );
};
