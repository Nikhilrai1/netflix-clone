import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state,action) => {
        state.user = action.payload
    },
    logout: (state) => {
        state.user = null
    }
  }
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user; // two user means from store and from userSlice
export default userSlice.reducer;
