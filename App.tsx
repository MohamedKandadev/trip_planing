import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ThemeProvider, useTheme} from './context/ThemeContext';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigations/MainNavigation';
import ReduxProvider from './providers/ReduxProvider';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {setUser} from './store/features/auth/authApi';
import {supabase} from './api/supabase';

type Props = {};

const App = (props: Props) => {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
        <Toast ref={ref => Toast.setRef(ref)} />
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
