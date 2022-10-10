import {
  GET_DATA,
  GET_DATA_DEFAIL,
  GET_DATA_SUCCESS,
  CHANGE_HEART_FOOD,
  CHANGE_HEART_FOOD_DEFAIL,
  CHANGE_HEART_FOOD_SUCCESS,
  CHOSSE_OUT_STANDING_FOOD,
  CHOSSE_OUT_STANDING_FOOD_DEFAIL,
  CHOSSE_OUT_STANDING_FOOD_SUCCESS,
  DELETE_FOOD_MY_CART,
  DELETE_FOOD_MY_CART_DEFAIL,
  DELETE_FOOD_MY_CART_SUCCESS,
  LIST_ORDER,
  LIST_ORDER_DEFAIL,
  LIST_ORDER_SUCCESS,
  ADD_FOOD_ORDER,
  REMOVE_FOOD_ORDER,
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
        listDataOutStandingFood: [...state.listData],
        myCart: actions.payload.filter((item: any) => item.isHeart == true),
        listData: actions.payload,
        error: false,
        loading: false,
      };
    case CHANGE_HEART_FOOD:
      const rootDataChangeHeart = state.listDataOutStandingFood;
      const changeHeart = rootDataChangeHeart.findIndex(
        (item: any) => item.id == actions.payload.id,
      );
      rootDataChangeHeart[changeHeart].isHeart =
        !rootDataChangeHeart[changeHeart].isHeart;

      const newMyCart = rootDataChangeHeart;
      return {
        ...state,
        listDataOutStandingFood: [...rootDataChangeHeart],
        myCart: newMyCart,
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
    case CHOSSE_OUT_STANDING_FOOD:
      const newListOutStandingFood = state.listData.filter((item: any) => {
        if (actions.payload == 'all') {
          return item;
        } else if (item.categoryFood == actions.payload) {
          return item.categoryFood == actions.payload;
        }
      });
      return {
        ...state,
        listDataOutStandingFood: newListOutStandingFood,
      };
    case CHOSSE_OUT_STANDING_FOOD_DEFAIL:
      return {
        ...state,
      };
    case CHOSSE_OUT_STANDING_FOOD_SUCCESS:
      return {
        ...state,
      };
    case DELETE_FOOD_MY_CART:
      const updateMyCart = state.myCart.filter(
        (item: any) => item.id !== actions.payload,
      );
      return {
        ...state,
        myCart: updateMyCart,
      };
    case LIST_ORDER:
      const getListOrder = [...state.listOrder, actions.payload];
      const updateListOrder = getListOrder.reduce((first, last) => {
        if (first.indexOf(last) === -1) {
          first.push(last);
          last['repeat'] = (last['repeat'] || 0) + 1;
        }
        return first;
      }, []);
      return {
        ...state,
        listOrder: updateListOrder,
      };
    case ADD_FOOD_ORDER:
      const rootData = state.listOrder;
      const addAmoutListOrder = rootData.findIndex(
        (item: any) => item.id == actions.payload.id,
      );
      rootData[addAmoutListOrder].repeat =
        rootData[addAmoutListOrder].repeat + 1;
      return {
        ...state,
        listOrder: [...rootData],
      };
    case REMOVE_FOOD_ORDER:
      const rootDataRemove = state.listOrder;
      const removeAmoutListOrder = rootDataRemove.findIndex(
        (item: any) => item.id == actions.payload.id,
      );
      rootDataRemove[removeAmoutListOrder].repeat =
        rootDataRemove[removeAmoutListOrder].repeat - 1;
      return {
        ...state,
        listOrder: [...rootDataRemove],
      };
    default:
      return {
        ...state,
      };
  }
};

export default Reducer;
