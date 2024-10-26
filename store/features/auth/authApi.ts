import {createSlice} from '@reduxjs/toolkit';
import {signInUser} from '../../../api/services/supabaseActions';

interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signInUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
export const {setAuthenticated, setUser} = authSlice.actions;
