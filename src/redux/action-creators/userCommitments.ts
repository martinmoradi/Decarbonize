import { Dispatch } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { headers } from '../../tools/api';
import { UserCommitmentsActionType } from '../types';
import { UserCommitmentsAction } from '../actions';


export const postUserCommitments = (commitment) => {
  return async (dispatch: Dispatch<UserCommitmentsAction>) => {
    dispatch({ 
      type: UserCommitmentsActionType.POST_USER_COMMITMENTS_ATTEMPT,
    });
    try { 
      const token = await AsyncStorage.getItem('token');
      if (!token) throw new Error('No token found');
      const response = await fetch(
        `https://perruches-decarbonize.herokuapp.com/api/v1/`,
        {
          method: 'POST',
          headers: headers(token),
          body: JSON.stringify(commitment),
        }
      );
      const { data, error } = await response.json();
      if (!response.ok) {
        throw new Error(error);
      }
      dispatch({
        type: UserCommitmentsActionType.POST_USER_COMMITMENTS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({ type: 
        UserCommitmentsActionType.POST_USER_COMMITMENTS_ERROR, 
        payload: err.message, 
      });
    }    
  }
}

export const delUserCommitments = (commitment) => {
  return async (dispatch: Dispatch<UserCommitmentsAction>) => {
    dispatch({ 
      type: UserCommitmentsActionType.DEL_USER_COMMITMENTS_ATTEMPT,
    });
    try { 
      const token = await AsyncStorage.getItem('token');
      if (!token) throw new Error('No token found');
      const response = await fetch(
        `https://perruches-decarbonize.herokuapp.com/api/v1/`,
        {
          method: 'DEL',
          headers: headers(token),
          body: JSON.stringify(commitment),
        }
      );
      const { data, error } = await response.json();
      if (!response.ok) {
        throw new Error(error);
      }
      dispatch({
        type: UserCommitmentsActionType.DEL_USER_COMMITMENTS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({ type: 
        UserCommitmentsActionType.DEL_USER_COMMITMENTS_ERROR, 
        payload: err.message, 
      });
    }    
  }
}