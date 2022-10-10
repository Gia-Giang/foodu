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

const actionGetData = () => ({
  type: GET_DATA,
});
const actionGetDataDefail = (payload: any) => ({
  type: GET_DATA_DEFAIL,
  payload,
});
const actionGetDataSuccess = (payload: any) => ({
  type: GET_DATA_SUCCESS,
  payload,
});

const actionChangeHeartFood = (payload: any) => ({
  type: CHANGE_HEART_FOOD,
  payload,
});
const actionChangeHeartFoodDefail = (payload: any) => ({
  type: CHANGE_HEART_FOOD_DEFAIL,
  payload,
});
const actionChangeHeartFoodSuccess = (payload: any) => ({
  type: CHANGE_HEART_FOOD_SUCCESS,
  payload,
});

const actionChosseOutStandingFood = (payload: any) => ({
  type: CHOSSE_OUT_STANDING_FOOD,
  payload,
});
const actionChosseOutStandingFoodDefail = (payload: any) => ({
  type: CHOSSE_OUT_STANDING_FOOD_DEFAIL,
  payload,
});
const actionChosseOutStandingFoodSuccess = (payload: any) => ({
  type: CHOSSE_OUT_STANDING_FOOD_SUCCESS,
  payload,
});

const actionDeleteFoodMyCart = (payload: any) => ({
  type: DELETE_FOOD_MY_CART,
  payload,
});
const actionDeleteFoodMyCartDefail = (payload: any) => ({
  type: DELETE_FOOD_MY_CART_DEFAIL,
  payload,
});
const actionDeleteFoodMyCartSuccess = (payload: any) => ({
  type: DELETE_FOOD_MY_CART_SUCCESS,
  payload,
});

const actionListOrder = (payload: any) => ({
  type: LIST_ORDER,
  payload,
});

const actionListOrderDefail = (payload: any) => ({
  type: LIST_ORDER_DEFAIL,
  payload,
});

const actionListOrderSuccess = (payload: any) => ({
  type: LIST_ORDER_SUCCESS,
  payload,
});

const actionAddOrder = (payload: any) => ({
  type: ADD_FOOD_ORDER,
  payload,
});

const actionRemoveOrder = (payload: any) => ({
  type: REMOVE_FOOD_ORDER,
  payload,
});

export {
  actionGetData,
  actionGetDataDefail,
  actionGetDataSuccess,
  actionChangeHeartFood,
  actionChangeHeartFoodDefail,
  actionChangeHeartFoodSuccess,
  actionChosseOutStandingFood,
  actionChosseOutStandingFoodDefail,
  actionChosseOutStandingFoodSuccess,
  actionDeleteFoodMyCart,
  actionDeleteFoodMyCartDefail,
  actionDeleteFoodMyCartSuccess,
  actionListOrder,
  actionListOrderDefail,
  actionListOrderSuccess,
  actionAddOrder,
  actionRemoveOrder,
};
