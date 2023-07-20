import { combineReducers } from '@reduxjs/toolkit';
import serviceSlice from '../slice/serviceSlice';

const rootReducer = combineReducers({
  services: serviceSlice,
});

export default rootReducer;