import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {Color} from '../../feather/Color';
import {styles} from './style';

interface Props {
  item: any;
  visible: boolean;
  handelDeleteSuccess: <Promise>(value: any) => void;
  handelClose: () => void;
}
const ModalConfig = ({
  item,
  visible,
  handelDeleteSuccess,
  handelClose,
}: Props) => {
  const handelDeleteFoodSuccess = () => {
    handelDeleteSuccess(item);
  };
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.overPlay} />
        <View style={styles.modal}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: Color.black}}>
            Bạn có chắc muốn xóa
          </Text>
          <View style={styles.confirm}>
            <TouchableOpacity
              style={styles.btnConfirm}
              onPress={handelDeleteFoodSuccess}>
              <Text style={{color: Color.white}}>Có</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnConfirm} onPress={handelClose}>
              <Text style={{color: Color.white}}>Không</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalConfig;
