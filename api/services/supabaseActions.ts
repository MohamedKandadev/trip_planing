import {Trip} from '../../types/interfaces/slice';
import {supabase} from '../supabase';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const createTrip = createAsyncThunk<Trip[], Trip, {rejectValue: string}>(
  'trip/createTrip',
  async ({name, startDate, endDate, isPublic, user_id}, {rejectWithValue}) => {
    const {data, error} = await supabase
      .from('trip')
      .insert([
        {
          name,
          start_date: startDate,
          end_date: endDate,
          isPublic,
          user_id,
        },
      ])
      .select();
    console.log('🚀 ~ data:', data);
    if (error) {
      return rejectWithValue(error.message);
    }

    // Return the data as Trip[]
    return data! as Trip[];
  },
);
