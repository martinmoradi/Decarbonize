import AsyncStorage from '@react-native-async-storage/async-storage';
import { headers } from '../../tools/api';
import { Dispatch } from 'redux';
import { TripAction } from '../actions';
import { TripActionType } from '../types';

export const postCommonTrip = (tripData: {vehicle_type: string, round_trip: boolean, distance: number})=>{
        return async (dispatch: Dispatch<TripAction>)=>{
            dispatch({
                type: TripActionType.POST_TRIP_ATTEMPT,
              });
            try{
                const token = await AsyncStorage.getItem('token');
                if (!token) throw new Error('No token found');
                const response = await fetch(
                    `https://perruches-decarbonize.herokuapp.com/api/v1/land_trip`,
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
                    payload: data,
                  });

            }catch(err){
                dispatch({
                    type: TripActionType.POST_TRIP_ERROR,
                    payload: err.message,
                  });
            }
        };
}