// slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const addtocardSlice = createSlice({
  name: 'addtocard',
  initialState: {
    value: [],
  },
  reducers: {
    addtocarddata: (state, action) => {
          state.value.push(action.payload);
    },
    removetocarddata:(state, action)=>{
        state.value = state.value.filter(item => item.id !== action.payload);
    },
    addQtyToCart:(state, action) => {
      
        const item = state.value.find((item) => item.id == action.payload);
       if (item) {
          item.qty += 1;
          item.finalPrice = parseFloat(item.price[item.size])*parseFloat(item.qty);
        }
      },
    decreaseQuantity: (state, action) => {
        const item = state.value.find((item) => item.id === action.payload);
        if (item && item.qty > 1) {
          item.qty -= 1;
          item.finalPrice = parseFloat(item.price[item.size])*parseFloat(item.qty);
        } else if (item && item.qty === 1) {
          state.value = state.value.filter((item) => item.id !== action.payload);
          item.finalPrice = parseFloat(item.price[item.size])*parseFloat(item.qty);
        }
      },  

  },
});

export const {addtocarddata,removetocarddata,addQtyToCart,decreaseQuantity} = addtocardSlice.actions;

export default addtocardSlice.reducer;
