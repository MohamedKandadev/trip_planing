import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useMemo, useRef} from 'react';
import {useTheme} from '../context/ThemeContext';
import colors from '../constant/colors';
import SIZES from '../constant/sizes';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import FONTS from '../constant/fonts';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

type Props = {};

const TripInfo = (props: Props) => {
  const {setColor} = useTheme();
  const isError = false;
  const bottomSheetRef = useRef(null);

  // Define snap points
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: setColor(
            colors.airline_deep_dark.light,
            colors.airline_white.light,
          ),
        },
      ]}>
      <View>
        <Input label="Trip Name" value="Imlil travel with chafik" />
        <Pressable
          style={[
            styles.tripInfoButton,
            {
              borderColor: isError
                ? colors.airline_red.light
                : setColor(
                    colors.airline_dark.light,
                    colors.airline_gray.gray300.light,
                  ),
            },
          ]}>
          <Text
            style={[
              styles.buttonText,
              {
                color: setColor(
                  colors.airline_gray.gray.light,
                  colors.airline_dark.light,
                ),
              },
            ]}>
            28 oct 2024 - 29 oct 2024
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.tripInfoButton,
            {
              borderColor: isError
                ? colors.airline_red.light
                : setColor(
                    colors.airline_dark.light,
                    colors.airline_gray.gray300.light,
                  ),
            },
          ]}>
          <Text
            style={[
              styles.buttonText,
              {
                color: setColor(
                  colors.airline_gray.gray.light,
                  colors.airline_dark.light,
                ),
              },
            ]}>
            Trip Privacy
          </Text>
          <Text
            style={[
              styles.buttonText,
              {
                color: setColor(
                  colors.airline_gray.gray.light,
                  colors.airline_dark.light,
                ),
              },
            ]}>
            Public
          </Text>
        </Pressable>
      </View>
      <Button title="Create Trip" />
      <BottomSheet
        ref={bottomSheetRef}
        index={-1} // Initially closed
        snapPoints={snapPoints}
        enablePanDownToClose={true}>
        <Text>asas</Text>
      </BottomSheet>
    </View>
  );
};

export default TripInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.spacing.lg,
    paddingVertical: SIZES.spacing.lg * 2,
  },
  tripInfoButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: SIZES.borderRadius.medium,
    borderWidth: 2,
    paddingHorizontal: SIZES.spacing.md,
    marginBottom: SIZES.spacing.sm,
    height: 60,
  },
  buttonText: {
    ...FONTS.pr1.san_francisco.light,
  },
});
