import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ThemeProvider, useTheme} from './context/ThemeContext';
import Button from './components/common/Button';
import Header from './components/common/Header';
import colors from './constant/colors';

type Props = {};

const App = (props: Props) => {
  return (
    <ThemeProvider>
      <SafeAreaView
        style={{flex: 1, backgroundColor: colors.airline_deep_dark.dark}}>
        <Button />
        <Header />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
