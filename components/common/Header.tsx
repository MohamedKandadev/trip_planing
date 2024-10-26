import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../context/ThemeContext';
import FONTS from '../../constant/fonts';
import colors from '../../constant/colors';

type Props = {};

const Header = (props: Props) => {
  const {theme, toggleTheme, setColor} = useTheme();

  return (
    <Text
      style={{
        color: setColor(
          colors.airline_deep_dark.dark,
          colors.airline_blue.light,
        ),
        ...FONTS.h2.new_york,
      }}>
      Toggle Theme
    </Text>
  );
};

export default Header;

const styles = StyleSheet.create({});
