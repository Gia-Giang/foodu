import React, {useState, useCallback, useMemo} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {styles} from '../../screens/homeScreen/style';

interface Props {
  handelClick?: any;
  chooseOutStanding: (value: any) => void;
  ItemFood?: any;
}

const RenderFoodRecommended = ({
  ItemFood,
  chooseOutStanding,
  handelClick,
}: Props) => {
  const selector = useSelector((state: any) => ({
    foodList: state.data.data.foodList,
  }));
  const [idFoodRecommended, setIdFoodRecommended] = useState<any>(-1);

  const renderFoodRecommended = useMemo(() => {
    return (
      <FlatList
        contentContainerStyle={{paddingLeft: 15}}
        ListHeaderComponent={() => (
          <TouchableOpacity
            onPress={() => {
              chooseOutStanding('all');
              setIdFoodRecommended(-1);
            }}
            style={[
              styles.foodRecommended,
              {
                backgroundColor: idFoodRecommended == -1 ? '#1BAC4B' : 'white',
              },
            ]}>
            <View
              style={{
                width: 27,
                height: 27,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: idFoodRecommended == -1 ? 'white' : '1BAC4B',
                }}>
                All
              </Text>
            </View>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={selector?.foodList}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.foodRecommended,
                idFoodRecommended == index && {backgroundColor: '#1BAC4B'},
              ]}
              onPress={() => {
                setIdFoodRecommended(index);
                chooseOutStanding(item?.categoryFood);
              }}>
              <Image
                style={{width: 27, height: 27, marginRight: 5}}
                source={{
                  uri: item.icon,
                }}
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: idFoodRecommended == index ? 'white' : '#1BAC4B',
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  }, [idFoodRecommended]);

  return <>{renderFoodRecommended}</>;
};

export default RenderFoodRecommended;
