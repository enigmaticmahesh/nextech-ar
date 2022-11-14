import { configureStore } from '@reduxjs/toolkit';
import { dashboardApi } from './apis/dashboardApi';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dashboardApi.middleware),
});
