import {createClient} from '@supabase/supabase-js';
// import {SUPABASE_KEY, SUPABASE_URL} from '@env';

const supabaseUrl =
  process.env.SUPABASE_URL || 'https://gggmlvihaojsjczdnwql.supabase.co';
const supabaseKey =
  process.env.SUPABASE_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnZ21sdmloYW9qc2pjemRud3FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5MjQ3NzcsImV4cCI6MjA0NTUwMDc3N30.vraE2T3nKCLo_Y5uRfSKoYzNLipxkFpA1SdBXeD8CcQ';

import {AppState} from 'react-native';
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
AppState.addEventListener('change', state => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});
