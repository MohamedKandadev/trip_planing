import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {NavigationScreenProps} from '../types/interfaces/pages';

const Destinations: FC<NavigationScreenProps> = ({route}) => {
  const {trip_id} = route.params as {trip_id: string};
  console.log(trip_id);
  return (
    <View>
      <Text>Destinations</Text>
    </View>
  );
};

export default Destinations;

const styles = StyleSheet.create({});
