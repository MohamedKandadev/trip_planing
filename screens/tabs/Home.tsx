import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../components/common/Button';
import SIZES from '../../constant/sizes';
import {useDispatch} from 'react-redux';
import {signOut} from '../../api/services/supabaseActions';
import {useTheme} from '../../context/ThemeContext';

type Props = {};

const Home = (props: Props) => {
  const dispatch = useDispatch();
  const {toggleTheme} = useTheme();

  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: SIZES.spacing.lg}}>
        <Button title="Log out" onPress={toggleTheme} />
      </View>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
