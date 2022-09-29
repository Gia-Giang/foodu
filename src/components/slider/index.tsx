import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {dataImages} from '../../assets/images';
import {ScrollView} from 'react-native-gesture-handler';

interface PropsSlider {
  data: any;
  onPress: () => void;
}
const Slider = ({data, onPress}: PropsSlider) => {
  const scrollRef: any = useRef();
  const [poinSlider, setPoinSlider] = useState<any>(0);

  const onMomentumScrollEnd = (e: any) => {
    const {x, y} = e.nativeEvent.contentOffset;
    const positionX = Math.round(x / width);
    setPoinSlider(positionX);
  };
  useEffect(() => {
    scrollRef.current.scrollTo({
      animated: true,
      x: poinSlider * width,
      y: 0,
    });
  }, [poinSlider]);
  const renderPoin = (length: number) => {
    const datas = [];
    for (let i = 0; i < length; i++) {
      datas.push(
        <View
          style={{
            width: poinSlider == i ? 40 : 10,
            height: 10,
            backgroundColor: poinSlider == i ? 'green' : '#E1E0E1',
            marginHorizontal: 5,
            borderRadius: 10,
          }}
        />,
      );
    }
    return datas;
  };
  const NextSlider = () => {
    if (poinSlider >= data?.length - 1) {
      onPress();
    } else {
      setPoinSlider(poinSlider + 1);
    }
  };
  const renderBtn = () => {
    switch (poinSlider) {
      case 2:
        return 'START';
      default:
        return 'NEXT';
    }
  };
  return (
    <View style={{alignItems: 'center'}}>
      <ScrollView
        ref={scrollRef}
        pagingEnabled
        horizontal
        onMomentumScrollEnd={onMomentumScrollEnd}>
        {data?.map((item: any, index: any) => (
          <View style={{flex: 1}} key={index}>
            <ImageBackground
              resizeMode="cover"
              source={{uri: item}}
              style={{
                width: width,
                height: height,
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}></ImageBackground>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          {renderPoin(data?.length)}
        </View>
        <TouchableOpacity
          style={{
            width: (width / 100) * 80,
            height: 50,
            backgroundColor: '#1BAC4B',
            marginBottom: 80,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
          }}
          onPress={NextSlider}>
          <Text style={{color: 'white'}}>{renderBtn()}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const {width, height} = Dimensions.get('screen');
export default Slider;
