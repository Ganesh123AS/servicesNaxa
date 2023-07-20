import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    fetchServiceStart: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    fetchServiceSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchServiceError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchServiceStart, fetchServiceSuccess, fetchServiceError } = serviceSlice.actions;
export default serviceSlice.reducer;