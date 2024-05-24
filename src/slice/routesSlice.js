// routesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentRoute: '/',
};

const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    setCurrentRoute(state, action) {
      state.currentRoute = action.payload;
    },
  },
});

export const { setCurrentRoute } = routesSlice.actions;
export default routesSlice.reducer;
