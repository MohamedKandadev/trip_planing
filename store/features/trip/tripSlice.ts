import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createTrip} from './tripActions';
import {Trip} from '../../../types/interfaces/slice';

interface TripState {
  trips: Trip[];
  loading: boolean;
  error: string | null;
}

const tripSlice = createSlice({
  name: 'trips',
  initialState: {
    trips: [] as Trip[],
    loading: false,
    error: null,
  } as TripState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createTrip.pending, state => {
        state.loading = true;
      })
      .addCase(createTrip.fulfilled, (state, action: PayloadAction<Trip[]>) => {
        state.loading = false;
        state.trips.push(...action.payload); // Assuming payload is an array
      })
      .addCase(createTrip.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default tripSlice.reducer;
