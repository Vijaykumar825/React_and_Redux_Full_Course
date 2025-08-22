import { act } from 'react';
import {configureStore} from '@reduxjs/toolkit';
import {createStore} from 'redux';
import { createSlice } from '@reduxjs/toolkit';
import counterSlice from './Counter';
import privacySlice from './Privacy';
const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer
  }
});
export const counterActions = counterSlice.actions;
export const privacyActions = privacySlice.actions;
export default counterStore;

/**
 * const INITAL_VALUE = {
  counter:0,
  privacy:false

};
  const counterReducer = (store=INITAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...store,
      counter: store.counter + 1
    };
  }
  else if (action.type === "DECREMENT") {
    return {
      ...store,
     
      counter: store.counter - 1
    };
   
    
    
  }
   else if (action.type === "ADD") {
    return {
      ...store,
     
      counter: store.counter + Number(action.payload.num)
    };
  }
  else if (action.type === "SUBTRACT") {
    return {
      ...store,
     
      counter: store.counter - Number(action.payload.num)
    };
  }
  else if (action.type === "PRIVACY") {
    return {
      ...store,
     
      privacy: !store.privacy
    };
  }
  //console.log("Action dispatched:", action);
  return store;
};
 */