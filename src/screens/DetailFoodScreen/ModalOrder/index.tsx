import React, {useState, useCallback, useRef, useMemo} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import {Color} from '../../../feather/Color';
import {actionAddOrder, actionRemoveOrder} from '../../../reduxs/actions';
import {styles} from './style';

interface Props {
  handelAddFoodOrder?: () => void;
  onPress?: (() => void) | undefined;
  visible: boolean;
}
const ModalOrder = ({onPress, visible}: Props) => {
  const selector = useSelector((state: any) => state.data.listOrder);
  const dispatch = useDispatch();
  const ref: any = useRef();
  const [amount, setAmount] = useState<any>({});

  const renderListOrder = useMemo(() => {
    return selector.map((item: any, index: any) => {
      return (
        <View style={styles.food} key={index}>
          <Image
            style={styles.imgFood}
            source={{
              uri: item?.img || item?.uriImg,
            }}
          />
          <View style={styles.infomationFood}>
            <View style={styles.titleFood}>
              <Text style={{fontSize: 18}}>{item?.name || item?.nameFood}</Text>
              <Text style={{fontSize: 12, color: '#888888'}}>100 + thich</Text>
            </View>
            <View style={styles.totalFood}>
              <Text style={{fontSize: 18, color: 'red', fontWeight: '600'}}>
                {item.price}
              </Text>
              <View style={styles.subtend}>
                <TouchableOpacity
                  onPress={() => handelAmout('minus', item)}
                  style={styles.itemSubtend}>
                  <Text style={{color: Color.error}}>-</Text>
                </TouchableOpacity>
                <Text style={{marginHorizontal: 10, fontSize: 16}}>
                  {item?.repeat}
                </Text>
                <TouchableOpacity
                  onPress={() => handelAmout('add', item)}
                  style={[styles.itemSubtend, {backgroundColor: 'red'}]}>
                  <Text style={{color: Color.white}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      );
    });
  }, [selector]);

  const handelAmout = useCallback(
    (method: string, title: any) => {
      if (method == 'add') {
        dispatch(actionAddOrder(title));
      } else if (method == 'minus') {
        if (title?.repeat <= 0) {
          return;
        }
        dispatch(actionRemoveOrder(title));
      }
    },
    [amount],
  );
  return (
    <Modal visible={visible} transparent animationType="slide" ref={ref}>
      <View style={styles.container}>
        <View style={styles.listFoodOrder}>
          <View style={styles.header}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: '600',
                color: 'black',
              }}>
              Thêm món mới
            </Text>
            <TouchableOpacity
              style={{position: 'absolute', right: 10}}
              onPress={onPress}>
              <AntDesign name="close" size={30} />
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
          <ScrollView>{renderListOrder}</ScrollView>
          <View style={styles.line} />
        </View>
      </View>
    </Modal>
  );
};

export default ModalOrder;
