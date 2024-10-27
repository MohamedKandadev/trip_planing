import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTE} from '../types/enums/navigation';
import OnBoarding from '../screens/auth/OnBoarding';
import SignIn from '../screens/auth/SignIn';

const Stack = createNativeStackNavigator();

const MainNavigation = () => (
  <Stack.Navigator
    initialRouteName={ROUTE.ONBOARDING}
    screenOptions={{headerShown: false}}>
    <Stack.Screen name={ROUTE.ONBOARDING} component={OnBoarding} />
    <Stack.Screen name={ROUTE.SIGNIN} component={SignIn} />
  </Stack.Navigator>
);

export default MainNavigation;
