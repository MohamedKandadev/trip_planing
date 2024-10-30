import {createAsyncThunk} from '@reduxjs/toolkit';
import {supabase} from '../../../api/supabase';

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

export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async (
    {email, password, name}: {email: string; password: string; name: string},
    {rejectWithValue},
  ) => {
    try {
      const {data, error} = await supabase.auth.signUp({
        options: {
          data: {name},
        },
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

export const signOut = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  const {error} = await supabase.auth.signOut();
  if (error) return thunkAPI.rejectWithValue(error.message);
});
