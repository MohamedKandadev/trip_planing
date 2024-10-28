import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from '../common/Input';

type Props = {};

const SignInForm = (props: Props) => {
  return (
    <View>
      <Input label="E-mail" />
      <Input label="Password" value="" secureTextEntry />
    </View>
  );
};

export default SignInForm;

const styles = StyleSheet.create({});
