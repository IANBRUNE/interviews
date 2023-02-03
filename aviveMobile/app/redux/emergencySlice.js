import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  emergencies: [],
};

export const emergencySlice = createSlice({
  name: 'emergency',
  initialState,
  reducers: {
    addEmergency: (state, action) => {
      if (!action.payload) {
        return;
      }
      state.emergencies.push({
        noticeTime: action.payload.noticeTime,
        respondTime: action.payload.respondTime,
      });
    },
  },
});

export const {addEmergency} = emergencySlice.actions;

export default emergencySlice.reducer;
