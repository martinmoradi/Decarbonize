import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export interface AuthNavigationProps<RouteName extends keyof AuthRoutesParamsList> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthRoutesParamsList, RouteName>,
    BottomTabNavigationProp<AppRoutesParamsList, 'Home'>
  >;
  route: RouteProp<AuthRoutesParamsList, RouteName>;
}

export interface HomeTabNavigationProps<RouteName extends keyof HomeRoutesParamsList> {
  navigation: BottomTabNavigationProp<HomeRoutesParamsList, RouteName>;
  route: RouteProp<HomeRoutesParamsList, RouteName>;
}

export type AppRoutesParamsList = {
  Authentication: undefined;
  Home: undefined;
};

export type AuthRoutesParamsList = {
  Onboarding: undefined;
  Login: undefined;
  Auth: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Password: undefined;
};

export type HomeRoutesParamsList = {
  Dashboard: undefined;
  History: undefined;
  Engagements: undefined;
  Settings: undefined;
};
