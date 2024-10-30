import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {useTheme} from '../../context/ThemeContext';
import FONTS from '../../constant/fonts';
import SIZES from '../../constant/sizes';
import colors from '../../constant/colors';
import {buttonProps} from '../../types/interfaces/pages';

type Props = {};

const Button: FC<buttonProps> = ({title, onPress, isLoading = false}) => {
  const {setColor, toggleTheme} = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: setColor(
            colors.airline_white.light,
            colors.airline_dark.light,
          ),
        },
      ]}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text
          style={[
            styles.buttonText,
            {
              color: setColor(
                colors.airline_dark.light,
                colors.airline_gray.gray300.light,
              ),
            },
          ]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 64,
    borderRadius: SIZES.borderRadius.large,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    ...FONTS.pr1.san_francisco.bold,
  },
});
