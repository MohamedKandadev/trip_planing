import {supabase} from '../supabase';
import {createAsyncThunk} from '@reduxjs/toolkit';
// import { setAuthenticated, setUser } from '@features/auth/authSlice';

// Async action for signing in a user
export const signInUser = createAsyncThunk(
  'auth/signInUser',
  async (
    {email, password}: {email: string; password: string},
    {rejectWithValue},
  ) => {
    try {
      const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      return data.user;
    } catch (error: unknown) {
      if (error instanceof Error) return rejectWithValue(error.message);
      return rejectWithValue(error);
    }
  },
);
