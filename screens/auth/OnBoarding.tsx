import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Swiper from 'react-native-swiper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '../../context/ThemeContext';
import colors from '../../constant/colors';
import {onBoardingItems} from '../../helpers/pages';
import OnboardingItem from '../../components/onboarding/OnboardingItem';
import SIZES from '../../constant/sizes';

const OnBoarding = () => {
  const {setColor, toggleTheme, isDarkTheme} = useTheme();
  const [swiperIndex, setSwiperIndex] = useState<number>(0);
  const swiperRef = useRef<Swiper>(null);

  const handleSwiperChange = () => {
    if (swiperIndex < onBoardingItems.length + 1)
      swiperRef.current?.scrollTo(swiperIndex + 1);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: setColor(
          colors.airline_deep_dark.light,
          colors.airline_white.light,
        ),
      }}>
      <Swiper
        onIndexChanged={(index: number) => setSwiperIndex(index)}
        ref={swiperRef}
        showsPagination={false}
        loop={false}>
        <OnboardingItem {...onBoardingItems[0]} />
        <OnboardingItem {...onBoardingItems[1]} />
        <OnboardingItem {...onBoardingItems[2]} />
      </Swiper>
      <Pressable
        onPress={handleSwiperChange}
        style={{
          marginHorizontal: 'auto',
          backgroundColor: setColor(
            colors.airline_gray.gray.light,
            colors.airline_dark.light,
          ),
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: SIZES.borderRadius.xlarge,
          marginTop: -90,
        }}>
        <Text
          style={{
            color: setColor(
              colors.airline_gray.gray100.light,
              colors.airline_gray.gray300.light,
            ),
          }}>
          Continue
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  customDot: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: 8,
    height: 8,
    borderRadius: 5,
  },
});
