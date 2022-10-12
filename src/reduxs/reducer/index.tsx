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
  ORDER_FOOD,
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

      return {
        ...state,
        listDataOutStandingFood: [...rootDataChangeHeart],
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
        listOrder: updateMyCart,
      };
    case LIST_ORDER:
      const qwer = state.listOrder.findIndex(
        (item: any) => item.id == actions.payload.id,
      );
      if (qwer !== -1) {
        state.listOrder[qwer]['repeat'] = state.listOrder[qwer]['repeat'] + 1;
      } else {
        actions.payload['repeat'] = 1;
        state.listOrder.push(actions.payload);
      }
      return {
        ...state,
        myCart: [...state.listOrder],
        listOrder: [...state.listOrder],
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
        myCart: [...rootData],
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
        myCart: [...rootDataRemove],
      };
    case ORDER_FOOD:
      const order = actions.payload.map((item: any) => {
        item['status'] = 'Active';
        return item;
      });
      return {
        ...state,
        listOrderTransport: [...order],
      };
    default:
      return {
        ...state,
      };
  }
};

export default Reducer;
