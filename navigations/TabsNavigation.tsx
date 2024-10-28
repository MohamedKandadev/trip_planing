import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/tabs/Home';
import {TAB_ROUTE} from '../types/enums/navigation';
import NewTrip from '../screens/tabs/NewTrip';
import Profile from '../screens/tabs/Profile';
import SIZES from '../constant/sizes';
import {useTheme} from '../context/ThemeContext';
import colors from '../constant/colors';
import icons from '../constant/icons';
import FONTS from '../constant/fonts';
import TabIcon from '../components/common/TabIcon';

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  const {setColor} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: setColor(
            colors.airline_dark.light,
            colors.airline_white.light,
          ),
          paddingTop: SIZES.spacing.md,
          paddingBottom: SIZES.spacing.md,
          height: 100,
        },
      }}>
      <Tab.Screen
        name={TAB_ROUTE.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} image={icons.compass} title="Explore" />
          ),
          title: '',
        }}
      />
      <Tab.Screen
        name={TAB_ROUTE.NEW_TRIP}
        component={NewTrip}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} image={icons.plus} title="Explore" />
          ),
          title: '',
        }}
      />
      <Tab.Screen
        name={TAB_ROUTE.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} image={icons.profile} title="Explore" />
          ),
          title: '',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigation;

const styles = StyleSheet.create({});
