import {
  GET_DATA,
  GET_DATA_DEFAIL,
  GET_DATA_SUCCESS,
  CHANGE_HEART_FOOD,
  CHANGE_HEART_FOOD_DEFAIL,
  CHANGE_HEART_FOOD_SUCCESS,
} from '../contains';
import {data} from './data';
const initState = data;

const Reducer = (state = initState, actions: any) => {
  switch (actions.type) {
    case GET_DATA:
      return {
        ...state,
      };
    case GET_DATA_DEFAIL:
      return {
        ...state,
        error: true,
        loading: true,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        listData: actions.payload,
        error: false,
        loading: false,
      };
    case CHANGE_HEART_FOOD:
      console.log('action', actions);
      const listData = state.listData;
      const food = actions.payload.dataFood;
      const searchList = listData.indexOf(food);
      food.isHeart = !food.isHeart;
      listData.splice(searchList, 1, food);
      return {
        ...state,
        listData: listData,
      };
    case CHANGE_HEART_FOOD_DEFAIL:
      return {
        ...state,
        error: true,
      };
    case CHANGE_HEART_FOOD_SUCCESS:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default Reducer;
