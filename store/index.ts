import {configureStore} from '@reduxjs/toolkit';
import authSlice from './features/auth/authApi';

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // Supabase auth includes non-serializable data
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
