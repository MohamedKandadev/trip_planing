import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {TabIconProps} from '../../types/interfaces/pages';
import {useTheme} from '../../context/ThemeContext';
import colors from '../../constant/colors';
import FONTS from '../../constant/fonts';

type Props = {};

const TabIcon: FC<TabIconProps> = ({focused, image, title}) => {
  const {setColor} = useTheme();
  return (
    <View>
      <Image
        source={image}
        style={styles.tabIcon}
        tintColor={
          focused
            ? setColor(
                colors.airline_gray.gray200.light,
                colors.airline_dark.light,
              )
            : setColor(
                colors.airline_gray.gray.light,
                colors.airline_gray.gray100.light,
              )
        }
      />
      <Text
        style={[
          styles.tabTitle,
          {
            color: focused
              ? setColor(
                  colors.airline_gray.gray200.light,
                  colors.airline_dark.light,
                )
              : setColor(
                  colors.airline_gray.gray.light,
                  colors.airline_gray.gray100.light,
                ),
          },
        ]}>
        Explore
      </Text>
    </View>
  );
};

export default TabIcon;

const styles = StyleSheet.create({
  tabIcon: {
    width: 26,
    height: 26,
    marginHorizontal: 'auto',
    marginBottom: 10,
  },
  tabTitle: {
    ...FONTS.pr3.san_francisco.light,
  },
});
