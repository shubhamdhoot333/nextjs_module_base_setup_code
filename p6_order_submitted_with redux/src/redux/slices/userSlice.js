// slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const addUser = createAsyncThunk('user/addUser', async (userData) => {
  const response = await axios.post('https://dummyjson.com/users/add', userData.credentials);
  return response.data;
});

export const loginUser = createAsyncThunk('user/loginUser', async (userData) => {
  const response = await axios.post('https://dummyjson.com/users/login', userData.credentials);
  return response.data;
});
export const getUser = createAsyncThunk('user/getUser', async (token) => {
  const response = await axios.get('https://dummyjson.com/user/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("response",response)
  return response.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(addUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value.push(action.payload);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      }).addCase(getUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value.push(action.payload);
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
      ;
  },
 
});
export const { setStatus } = userSlice.actions;

export default userSlice.reducer;
