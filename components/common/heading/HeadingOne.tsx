import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {headingOneProps} from '../../../types/interfaces/pages';
import FONTS from '../../../constant/fonts';
import {useTheme} from '../../../context/ThemeContext';
import colors from '../../../constant/colors';

type Props = {};

const HeadingOne: FC<headingOneProps> = ({style, title}) => {
  const {setColor} = useTheme();

  return (
    <View style={[styles.heading, style]}>
      <Text
        style={[
          styles.headingTitle,
          {
            color: setColor(
              colors.airline_gray.gray.light,
              colors.airline_dark.light,
            ),
          },
        ]}>
        {title}
      </Text>
    </View>
  );
};

export default HeadingOne;

const styles = StyleSheet.create({
  heading: {zIndex: 100},
  headingTitle: {
    textAlign: 'center',
    ...FONTS.h3.san_francisco.light,
  },
});
