// store.js
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import counterReducer from './slices/counterSlice';
import addtocardReducer from './slices/addtocardSlice';
const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
      addtocard:addtocardReducer,
    },
  });

export const wrapper = createWrapper(makeStore);