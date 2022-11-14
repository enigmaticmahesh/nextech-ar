import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    setAuth: (state, action) => {
      for (const property in action.payload) {
        state[property] = action.payload[property];
      }
    },
    resetAuth: (state, action) => {
      state = INITIAL_STATE;
    },
  },
});

export const { setAuth, resetAuth } = authSlice.actions;
export default authSlice.reducer;
