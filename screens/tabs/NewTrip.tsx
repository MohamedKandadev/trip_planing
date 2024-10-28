import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import Button from '../../components/common/Button';
import SIZES from '../../constant/sizes';
import {NavigationScreenProps} from '../../types/interfaces/pages';
import {ROUTE} from '../../types/enums/navigation';

type Props = {};

const NewTrip: FC<NavigationScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: SIZES.spacing.lg}}>
        <Button
          title="Log out"
          onPress={() => navigation.navigate(ROUTE.TRIP_INFO)}
        />
      </View>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default NewTrip;

const styles = StyleSheet.create({});
