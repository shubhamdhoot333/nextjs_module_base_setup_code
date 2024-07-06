// store.js
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import counterReducer from './slices/counterSlice';
import addtocardReducer from './slices/addtocardSlice';
import userReducer from './slices/userSlice';
const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
      addtocard:addtocardReducer,
      user:userReducer,
    },
  });

export const wrapper = createWrapper(makeStore);
