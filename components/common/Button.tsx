import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../context/ThemeContext';
import FONTS from '../../constant/fonts';

type Props = {};

const Button = (props: Props) => {
  const {theme, toggleTheme} = useTheme();
  console.log(theme);

  return (
    <Pressable onPress={toggleTheme}>
      <Text style={{backgroundColor: theme.airline_blue}}>Button</Text>
      <Text style={{color: theme.text, ...FONTS.h1.new_york.bold}}>
        Toggle Theme
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({});
