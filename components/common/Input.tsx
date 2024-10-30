import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import SIZES from '../../constant/sizes';
import {useTheme} from '../../context/ThemeContext';
import colors from '../../constant/colors';
import FONTS from '../../constant/fonts';
import {inputProps} from '../../types/interfaces/pages';

const Input: FC<inputProps> = ({
  label,
  value = '',
  style,
  secureTextEntry = false,
  isError = false,
  name,
  onChangeText,
}) => {
  const {setColor} = useTheme();
  const inputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles.inputContainer,
        {
          borderColor: isError
            ? colors.airline_red.light
            : setColor(
                colors.airline_dark.light,
                colors.airline_gray.gray300.light,
              ),
        },
      ]}>
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={inputRef}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        id={name}
        placeholder={label}
        placeholderTextColor={setColor(
          colors.airline_gray.gray.light,
          colors.airline_gray.gray.light,
        )}
        style={[
          styles.inputField,
          {
            color: isError
              ? colors.airline_red.light
              : setColor(
                  colors.airline_gray.gray.light,
                  colors.airline_dark.light,
                ),
          },
        ]}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: SIZES.borderRadius.medium,
    borderWidth: 2,
    paddingLeft: SIZES.spacing.md,
    marginBottom: SIZES.spacing.sm,
  },
  inputLabel: {
    transform: [{translateY: '-50%'}],
    position: 'absolute',
    top: '50%',
    left: SIZES.spacing.md,
    ...FONTS.pr2.san_francisco.light,
  },
  inputField: {
    height: 60,
    paddingTop: 10,
    ...FONTS.pr1.san_francisco.light,
  },
});
