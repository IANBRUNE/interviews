import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import emergencyReducer from './emergencySlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    emergency: emergencyReducer,
  },
});
