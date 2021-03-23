import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export interface AuthNavigationProps<RouteName extends keyof AuthRoutesList> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthRoutesList, RouteName>,
    BottomTabNavigationProp<AppRoutesList, 'Home'>
  >;
  route: RouteProp<AuthRoutesList, RouteName>;
}

export interface HomeTabNavigationProps<RouteName extends keyof HomeRoutesList> {
  navigation: CompositeNavigationProp<
  BottomTabNavigationProp<HomeRoutesList, RouteName>,
  StackNavigationProp<HomeRoutesList, 'NewTripNavigator'>
  >;
  route: RouteProp<HomeRoutesList, RouteName>;
}


export interface TripStackNavigationProps<RouteName extends keyof TripRoutesList> {
  navigation: StackNavigationProp<TripRoutesList, RouteName>;
  route: RouteProp<TripRoutesList, RouteName>;
}

export type AppRoutesList = {
  Authentication: undefined;
  Home: undefined;
};

export type AuthRoutesList = {
  Welcome: undefined;
  Onboarding: undefined;
  Login: undefined;
  Auth: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  PasswordChanged: undefined;
};

export type HomeRoutesList = {
  Dashboard: undefined;
  History: undefined;
  Engagements: undefined;
  Settings: undefined;
  NewTripNavigator: undefined
};

export type TripRoutesList = {
  NewTripScreen: undefined;
  NewCarTripScreen: undefined;
  NewAirTripScreen: undefined;
  NewCommonTripScreen: undefined;
};
