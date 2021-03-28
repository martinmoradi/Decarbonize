import AsyncStorage from '@react-native-async-storage/async-storage';
import { headers } from '../../tools/api';
import { Dispatch } from 'redux';
import { EmissionsAction, TripAction } from '../actions';
import { TripActionType, EmissionsActionType } from '../types';

export const postCommonTrip = (tripData: {
  vehicle_type: string;
  round_trip: boolean;
  distance: number;
}) => {
  return async (dispatch: Dispatch<TripAction | EmissionsAction>) => {
    dispatch({
      type: TripActionType.POST_TRIP_ATTEMPT,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) throw new Error('No token found');
      const response = await fetch(
        `https://perruches-decarbonize.herokuapp.com/api/v1/land_trips`,
        {
          method: 'POST',
          headers: headers(token),
          body: JSON.stringify({ land_trip: { ...tripData } }),
        }
      );
      const { data, error } = await response.json();
      if (!response.ok) {
        throw new Error(error);
      }
      dispatch({
        type: TripActionType.POST_TRIP_SUCCESS,
        payload: data.trips,
      });
      dispatch({
        type: EmissionsActionType.FETCH_EMISSIONS_SUCCESS,
        payload: data.emissions,
      });
      alert('Trajet enregistré');
    } catch (err) {
      dispatch({
        type: TripActionType.POST_TRIP_ERROR,
        payload: err.message,
      });
    }
  };
};
export const postAirTrips = (tripData: {
  round_trip: boolean;
  departure: string;
  arrival: string;
  departure_latitude: number;
  departure_longitude: number;
  arrival_latitude: number;
  arrival_longitude: number;
}) => {
  return async (dispatch: Dispatch<TripAction | EmissionsAction>) => {
    dispatch({
      type: TripActionType.POST_TRIP_ATTEMPT,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) throw new Error('No token found');
      const response = await fetch(`https://perruches-decarbonize.herokuapp.com/api/v1/air_trips`, {
        method: 'POST',
        headers: headers(token),
        body: JSON.stringify({ air_trip: { ...tripData } }),
      });
      const { data, error } = await response.json();
      console.log('data:', data)
      if (!response.ok) {
        throw new Error(error);
      }
      dispatch({
        type: TripActionType.POST_TRIP_SUCCESS,
        payload: data.trips,
      });
      alert('Trajet enregistré');
      dispatch({
        type: EmissionsActionType.FETCH_EMISSIONS_SUCCESS,
        payload: data.emissions,
      });
    } catch (err) {
      dispatch({
        type: TripActionType.POST_TRIP_ERROR,
        payload: err.message,
      });
    }
  };
};

export const fetchTrips = () => {
  return async (dispatch: Dispatch<TripAction>) => {
    dispatch({
      type: TripActionType.FETCH_TRIPS_ATTEMPT,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) throw new Error('No token found');
      const response = await fetch(`https://perruches-decarbonize.herokuapp.com/api/v1/air_trips`, {
        method: 'GET',
        headers: headers(token),
      });
      const { data, error } = await response.json();
      if (!response.ok) {
        throw new Error(error);
      }
      dispatch({
        type: TripActionType.FETCH_TRIPS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TripActionType.FETCH_TRIPS_ERROR,
        payload: err.message,
      });
    }
  };
};
