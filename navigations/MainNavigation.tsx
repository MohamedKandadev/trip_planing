import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTE} from '../types/enums/navigation';
import OnBoarding from '../screens/auth/OnBoarding';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';
import Home from '../screens/tabs/Home';
import {useDispatch, useSelector} from 'react-redux';
import {supabase} from '../api/supabase';
import {RootState} from '../store';
import {setUser} from '../store/features/auth/authApi';
import TabsNavigation from './TabsNavigation';
import TripInfo from '../screens/TripInfo';

const Stack = createNativeStackNavigator();

const AuthStack = createNativeStackNavigator();

const AuthNaviagtion = () => (
  <AuthStack.Navigator
    initialRouteName={ROUTE.ONBOARDING}
    screenOptions={{headerShown: false}}>
    <Stack.Screen name={ROUTE.ONBOARDING} component={OnBoarding} />
    <Stack.Screen name={ROUTE.SIGNIN} component={SignIn} />
    <Stack.Screen name={ROUTE.SIGNUP} component={SignUp} />
  </AuthStack.Navigator>
);

const RootNavigator = () => (
  <AuthStack.Navigator
    initialRouteName={ROUTE.TABS}
    screenOptions={{headerShown: false}}>
    <Stack.Screen name={ROUTE.TABS} component={TabsNavigation} />
    <Stack.Screen
      name={ROUTE.TRIP_INFO}
      component={TripInfo}
      options={{presentation: 'modal'}}
    />
  </AuthStack.Navigator>
);

const MainNavigation = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const fetchUser = async () => {
      const {data} = await supabase.auth.getSession();
      if (data.session?.user) {
        dispatch(setUser(data.session?.user));
      }
    };

    fetchUser();
  }, [dispatch]);
  return !auth.isAuthenticated ? (
    <AuthNaviagtion />
  ) : (
    <>
      <RootNavigator />
    </>
  );
};

export default MainNavigation;
