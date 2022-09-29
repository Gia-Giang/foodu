import React from 'react';
import axios from 'axios';

const getData = () => {
  return axios
    .get('https://62e500f620afdf238d75b943.mockapi.io/listData')
    .then(data => data.data)
    .catch(e => console.log('error', e));
};

const changeHeart = ({id, dataFood}: any) => {
  console.log('dataFood', dataFood);
  return axios
    .put(`https://62e500f620afdf238d75b943.mockapi.io/listData/${id}`, {
      ...dataFood,
      isHeart: !dataFood.isHeart,
    })
    .then(data => data.data)
    .catch(e => console.log('error', e));
};

export {getData, changeHeart};
