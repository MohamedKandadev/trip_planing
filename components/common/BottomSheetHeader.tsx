import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import icons from '../../constant/icons';
import SIZES from '../../constant/sizes';
import {useTheme} from '../../context/ThemeContext';
import colors from '../../constant/colors';

type Props = {};

const BottomSheetHeader: FC<{
  closeButton: () => void;
  doneButton: () => void;
  title: string;
}> = ({closeButton, doneButton, title}) => {
  const {setColor} = useTheme();
  const colorTheme = setColor(
    colors.airline_gray.gray100.light,
    colors.airline_dark.light,
  );

  return (
    <View style={styles.bottomSheetHeader}>
      <Pressable onPress={closeButton}>
        <Image
          source={icons.plus}
          style={{width: 24, height: 24, tintColor: colorTheme}}
        />
      </Pressable>
      <Text style={{color: colorTheme}}>{title}</Text>
      <Pressable onPress={doneButton}>
        <Text style={{color: colorTheme}}>Done</Text>
      </Pressable>
    </View>
  );
};

export default BottomSheetHeader;

const styles = StyleSheet.create({
  bottomSheetHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: SIZES.spacing.lg,
  },
});
