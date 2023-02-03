import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log('action', action);
      // mock integration with auth API
      if (
        // could to toLowerCase() for apples to apples in real integration
        action.payload?.email === 'user@avive.life' &&
        action.payload?.password === 'AED$1NHOM3$'
      ) {
        state.isAuthenticated = true;
      }
    },
    logout: state => {
      state.isAuthenticated = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
