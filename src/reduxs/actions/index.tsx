import {
  GET_DATA,
  GET_DATA_DEFAIL,
  GET_DATA_SUCCESS,
  CHANGE_HEART_FOOD,
  CHANGE_HEART_FOOD_DEFAIL,
  CHANGE_HEART_FOOD_SUCCESS,
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

export {
  actionGetData,
  actionGetDataDefail,
  actionGetDataSuccess,
  actionChangeHeartFood,
  actionChangeHeartFoodDefail,
  actionChangeHeartFoodSuccess,
};
