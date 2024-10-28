import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from '../common/Input';

type Props = {};

const SignUpForm = (props: Props) => {
  return (
    <View>
      <Input label="Name" />
      <Input label="E-mail" />
      <Input label="Password" value="" secureTextEntry />
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({});
