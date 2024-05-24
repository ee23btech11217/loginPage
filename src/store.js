// store.js
import { configureStore } from '@reduxjs/toolkit';
import routesReducer from './slice/routesSlice';

const store = configureStore({
  reducer: {
    routes: routesReducer,
    // Add other reducers if any
  },
});

export default store;
