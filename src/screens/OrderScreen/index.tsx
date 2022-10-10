import React, {useState} from 'react';
import {View, Text, TextInput, useWindowDimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TabView, SceneMap} from 'react-native-tab-view';

import {styles} from './style';
import {Color} from '../../feather/Color';

const OrderScreen = () => {
  const selector = useSelector<any>(state => state.data.listOrder);
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Active'},
    {key: 'second', title: 'Second'},
    {key: 'third', title: 'Third'},
  ]);

  const renderFirstRoute = () => {
    return (
      <View>
        <Text>renderFirstRoute</Text>
      </View>
    );
  };
  const renderSecondRoute = () => {
    return (
      <View>
        <Text>renderFirstRoute</Text>
      </View>
    );
  };
  const renderThirdRoute = () => {
    return (
      <View>
        <Text>renderFirstRoute</Text>
      </View>
    );
  };

  const renderScene = SceneMap({
    first: renderFirstRoute,
    second: renderSecondRoute,
    third: renderThirdRoute,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconLeft}>
          <MaterialCommunityIcons
            name="order-bool-descending-variant"
            size={22}
            color={Color.green}
          />
          <Text
            style={{fontSize: 25, color: Color.black, marginHorizontal: 10}}>
            Order
          </Text>
        </View>
        <AntDesign name="search1" size={22} color={Color.black} />
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
};

export default OrderScreen;
