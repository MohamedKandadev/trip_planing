import {NavigationProp, RouteProp} from '@react-navigation/native';
import {ImageProps, ViewStyle} from 'react-native';

export interface NavigationScreenProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

export type onBoardingProps = {
  title: string;
  description?: string;
  image: ImageProps;
};

export type headingOneProps = {
  title: string;
  style?: ViewStyle;
};

export type inputProps = {
  value: string;
  label: string;
  style?: ViewStyle;
  secureTextEntry?: boolean;
  name: string;
  onChangeText?: (text: string) => void;
  isError: boolean;
};

export type buttonProps = {
  title: string;
  onPress?: () => void;
};

export type TabIconProps = {
  focused: boolean;
  title: string;
  image: ImageProps;
};
