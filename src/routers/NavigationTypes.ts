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
    StackNavigationProp<HomeRoutesList, 'New'>
  >;
  route: RouteProp<HomeRoutesList, RouteName>;
}

export interface TripStackNavigationProps<RouteName extends keyof TripRoutesList> {
  navigation: StackNavigationProp<TripRoutesList, RouteName>;
  route: RouteProp<TripRoutesList, RouteName>;
}

export interface SettingsStackNavigationProps<RouteName extends keyof SettingsRoutesList> {
  navigation: StackNavigationProp<SettingsRoutesList, RouteName>;
  route: RouteProp<SettingsRoutesList, RouteName>;
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
  Home: undefined;
  History: undefined;
  Deeds: undefined;
  Profile: undefined;
  New: undefined;
};

export type TripRoutesList = {
  NewTrip: undefined;
  NewCarTrip: undefined;
  NewAirTrip: undefined;
  NewCommonTrip: { type: string };
  AirPortSearch: { type: string };
  AirPortResults: undefined;
};

export type SettingsRoutesList = {
  Settings: undefined;
  SettingsEmission: undefined;
  SettingsFood: undefined;
  SettingsEnergy: undefined;
  SettingsSpending: undefined;
};
