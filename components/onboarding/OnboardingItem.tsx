import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {onBoardingProps} from '../../types/interfaces/pages';
import SIZES from '../../constant/sizes';
import FONTS from '../../constant/fonts';
import {useTheme} from '../../context/ThemeContext';
import colors from '../../constant/colors';

const OnboardingItem: FC<onBoardingProps> = ({image, title, description}) => {
  const {setColor} = useTheme();

  return (
    <View style={styles.onboardingItem}>
      <Image
        source={image}
        style={[styles.onboardingItemImage]}
        resizeMode="contain"
        tintColor={setColor(
          colors.airline_gray.gray.light,
          colors.airline_sky_blue_light.light,
        )}
      />
      <Text
        style={[
          styles.onboardingItemTitle,
          {
            color: setColor(
              colors.airline_gray.gray.light,
              colors.airline_dark.light,
            ),
          },
        ]}>
        {title}
      </Text>

      <Text
        style={[
          styles.onboardingItemDesc,
          {
            color: colors.airline_gray.gray.light,
          },
        ]}>
        {description}
      </Text>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  onboardingItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.spacing.xl,
  },
  onboardingItemImage: {
    height: 380,
    width: 238,
    marginBottom: SIZES.spacing.lg * 2,
  },
  onboardingItemTitle: {
    ...FONTS.h3.san_francisco.bold,
    textAlign: 'center',
    marginBottom: SIZES.spacing.md,
  },
  onboardingItemDesc: {
    ...FONTS.pr1.san_francisco.light,
    textAlign: 'center',
  },
});
