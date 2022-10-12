import React, {useState} from 'react';
import {View, Text, TextInput, useWindowDimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {styles} from './style';
import {Color} from '../../feather/Color';
import FirstRoute from '../TabViewScreen/FirstRoute';

const OrderScreen = () => {
  const selector = useSelector<any>(state => state.data.listOrder);
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Active'},
    {key: 'second', title: 'Complete'},
    {key: 'third', title: 'Cancelled'},
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
    first: FirstRoute,
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
        style={{
          shadowOffset: {height: 0, width: 0},
          shadowColor: 'transparent',
          shadowOpacity: 0,
          elevation: 0,
          marginHorizontal: 15,
        }}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={props => (
          <TabBar
            activeColor="#1BAC4B"
            inactiveColor="#9E9E9E"
            indicatorStyle={{
              backgroundColor: '#1BAC4B',
              height: 5,
              borderRadius: 10,
              marginBottom: -4,
            }}
            style={{
              shadowOffset: {height: 0, width: 0},
              shadowColor: 'transparent',
              shadowOpacity: 0,
              elevation: 0,
              backgroundColor: 'transparent',
              borderBottomColor: '#F1F1F1',
              borderBottomWidth: 2,
            }}
            renderLabel={({route, focused, color}) => (
              <Text style={{color: color, fontSize: 20}}>{route.title}</Text>
            )}
            {...props}
          />
        )}
      />
    </View>
  );
};

export default OrderScreen;
