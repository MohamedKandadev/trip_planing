import {configureStore} from '@reduxjs/toolkit';
import authSlice from './features/auth/authApi';
import tripSlice from './features/trip/tripSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    trip: tripSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // Supabase auth includes non-serializable data
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
