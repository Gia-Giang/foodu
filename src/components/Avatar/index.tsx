import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Modal,
  Dimensions,
} from 'react-native';

import {useFormikContext} from 'formik';
import Feather from 'react-native-vector-icons/Feather';
import FastImage from 'react-native-fast-image';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

interface Props {
  name: string;
}
const Avatar = ({name}: Props) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<any>('');
  const {values, setFieldValue} = useFormikContext();

  const options = {
    title: 'Select Image',
    customButtons: [
      {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  const handelOption = (item: any) => {
    if (item == 'Chụp ảnh') {
      launchCamera(options, e => {
        e.assets?.map(item => {
          setAvatar(item.uri);
        });
      });
      setVisible(false);
    } else {
      launchImageLibrary(options, e =>
        e.assets?.map(item => {
          setAvatar(item.uri);
        }),
      );
      setVisible(false);
    }
    setFieldValue(name, avatar);
  };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Modal visible={visible} transparent={true}>
        <TouchableOpacity
          style={{flex: 1}}
          onPressOut={() => setVisible(false)}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                position: 'absolute',
                backgroundColor: 'black',
                opacity: 0.2,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
            />
            <TouchableWithoutFeedback>
              <View
                style={{
                  height: 100,
                  marginBottom: 30,
                  backgroundColor: 'white',
                  marginHorizontal: 10,
                  borderRadius: 15,
                }}>
                {optionChoose.map((item: any, index: any) => (
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor:
                        index == optionChoose.length - 1
                          ? 'transparent'
                          : 'black',
                    }}
                    onPress={() => handelOption(item)}>
                    <Text>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableOpacity>
      </Modal>
      <View>
        <Image
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'red',
            marginVertical: 40,
            borderRadius: 100,
          }}
          source={{
            uri:
              avatar ||
              'https://www.kibrispdr.org/data/768/logo-user-png-8.jpg',
          }}
        />
        <TouchableOpacity onPress={() => setVisible(true)}>
          <View
            style={{
              position: 'absolute',
              bottom: 30,
              right: 20,
              backgroundColor: '#1BAC4B',
              padding: 5,
              borderRadius: 5,
            }}>
            <Feather name="edit-3" size={20} color={'white'} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const {width, height} = Dimensions.get('screen');
const optionChoose = ['Chụp ảnh', 'Chọn ảnh'];
export default Avatar;
