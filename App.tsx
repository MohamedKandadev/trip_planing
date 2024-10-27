import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ThemeProvider, useTheme} from './context/ThemeContext';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigations/MainNavigation';

type Props = {};

const App = (props: Props) => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
