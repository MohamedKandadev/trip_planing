import {createAsyncThunk} from '@reduxjs/toolkit';
import {supabase} from '../../../api/supabase';
import {Trip} from '../../../types/interfaces/slice';

export const createTrip = createAsyncThunk<Trip[], Trip, {rejectValue: string}>(
  'trip/createTrip',
  async ({name, startDate, endDate, isPublic, user_id}, {rejectWithValue}) => {
    const {data, error} = await supabase.from('trip').insert([
      {
        name,
        start_date: startDate,
        end_date: endDate,
        isPublic,
        user_id,
      },
    ]);
    if (error) {
      return rejectWithValue(error.message);
    }

    if (!data) {
      return rejectWithValue('No data returned from insert operation.');
    }

    // Return the data as Trip[]
    return data as Trip[];
  },
);
