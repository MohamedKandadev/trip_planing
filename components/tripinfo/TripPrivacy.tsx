import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import SIZES from '../../constant/sizes';
import {useTheme} from '../../context/ThemeContext';
import colors from '../../constant/colors';
import FONTS from '../../constant/fonts';

type Props = {};

const TripPrivacy: FC<{
  isPublic: boolean;
  setIspublic: (isPublic: boolean) => void;
}> = ({isPublic, setIspublic}) => {
  const {setColor} = useTheme();

  return (
    <View>
      <Pressable
        style={[
          styles.tripPrivacyItem,
          {
            borderColor: setColor(
              colors.airline_dark.light,
              colors.airline_gray.gray300.light,
            ),
            backgroundColor: !isPublic
              ? setColor(
                  colors.airline_dark.light,
                  colors.airline_gray.gray300.light,
                )
              : 'trasparent',
          },
        ]}
        onPress={() => setIspublic(false)}>
        <View>
          <Text
            style={[
              styles.title,
              {
                color: setColor(
                  colors.airline_gray.gray.light,
                  colors.airline_dark.light,
                ),
              },
            ]}>
            Private
          </Text>
          <Text
            style={[
              styles.desc,
              {
                color: setColor(
                  colors.airline_gray.gray.light,
                  colors.airline_dark.light,
                ),
              },
            ]}>
            Only you and your trip members can view your trip.
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[
          styles.tripPrivacyItem,
          {
            borderColor: setColor(
              colors.airline_dark.light,
              colors.airline_gray.gray300.light,
            ),
            backgroundColor: isPublic
              ? setColor(
                  colors.airline_dark.light,
                  colors.airline_gray.gray300.light,
                )
              : 'trasparent',
          },
        ]}
        onPress={() => setIspublic(true)}>
        <View>
          <Text
            style={[
              styles.title,
              {
                color: setColor(
                  colors.airline_gray.gray.light,
                  colors.airline_dark.light,
                ),
              },
            ]}>
            Public
          </Text>
          <Text
            style={[
              styles.desc,
              {
                color: setColor(
                  colors.airline_gray.gray.light,
                  colors.airline_dark.light,
                ),
              },
            ]}>
            Anyone can view your trip.
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default TripPrivacy;

const styles = StyleSheet.create({
  tripPrivacyItem: {
    height: 70,
    borderRadius: SIZES.borderRadius.medium,
    borderWidth: 2,
    paddingLeft: SIZES.spacing.md,
    marginBottom: SIZES.spacing.sm,
    paddingVertical: SIZES.spacing.md,
  },
  title: {
    ...FONTS.pr1.san_francisco.light,
  },
  desc: {
    marginTop: SIZES.spacing.xs,
    ...FONTS.pr3.san_francisco.light,
  },
});
