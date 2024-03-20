import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { authSlice } from './Auth';
import authMiddleware from './auth.middleware';

const store = configureStore({
  reducer: rootReducer,
//   middleware: [...getDefaultMiddleware(), authSlice.middleware],
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
});

export default store;

