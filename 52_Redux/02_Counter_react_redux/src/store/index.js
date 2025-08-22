import { act } from 'react';
import {createStore} from 'redux';
const INITAL_VALUE = {
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
const counterStore = createStore(counterReducer);

export default counterStore;