// slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    value: [],
  },
  reducers: {
    finalOrder: (state, action) => {
        console.log("action.payload",action.payload);
        action.payload.map((value)=>{
            state.value.push(value);
        })
          
    },
    },
});

export const {finalOrder} = orderSlice.actions;

export default orderSlice.reducer;
