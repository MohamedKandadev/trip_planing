import {StyleSheet, Text, View} from 'react-native';
import React, {FC, forwardRef, ReactNode} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useTheme} from '../../context/ThemeContext';
import colors from '../../constant/colors';
import SIZES from '../../constant/sizes';

export type BottomSheetProps = {
  height: number;
  children: ReactNode;
};

const BottomSheet: FC<BottomSheetProps> = forwardRef(
  ({children, height}, ref) => {
    const {setColor} = useTheme();

    return (
      <RBSheet
        ref={ref}
        closeOnPressMask={true}
        height={height} // Set the height as needed
        customStyles={{
          wrapper: {
            backgroundColor: setColor(
              'rgba(255, 255, 255, .5)',
              'rgba(27, 40, 55, .5)',
            ),
          },
          container: {
            borderRadius: SIZES.borderRadius.large,
            backgroundColor: setColor(
              colors.airline_deep_dark.light,
              colors.airline_white.light,
            ),
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View style={{padding: 20}}>{children}</View>
      </RBSheet>
    );
  },
);

export default BottomSheet;

const styles = StyleSheet.create({});
