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
  navigate(arg0: string, arg1?: { type: string }): void;
  goBack(): void;
  params: { type: string };
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
  NewAirTrip: {
    type: string;
    queryResult: {
      name: string;
      country: {
        iso2: string;
        iso3: string;
        isoNumeric: number;
        name: string;
        officialName: string;
      };
      timeZone: string;
      icao?: string;
      iata?: string;
      faa?: string;
      aid: string;
      coordinates: {
        latitude: number;
        longitude: number;
      };
      servedCity?: string;
      servedCityGoverningDistrict?: object;
    };
  };
  NewCommonTrip: { type: string };
  AirPortSearch: {
    type: string;
    queryResult?: {
      name: string;
      country: {
        iso2: string;
        iso3: string;
        isoNumeric: number;
        name: string;
        officialName: string;
      };
      timeZone: string;
      icao?: string;
      iata?: string;
      faa?: string;
      aid: string;
      coordinates: {
        latitude: number;
        longitude: number;
      };
      servedCity?: string;
      servedCityGoverningDistrict?: object;
    };
  };
  AirPortResults: { type: string; query: string };
};

export type SettingsRoutesList = {
  Settings: undefined;
  SettingsEmission: undefined;
  SettingsFood: undefined;
  SettingsEnergy: undefined;
  SettingsSpending: undefined;
};
