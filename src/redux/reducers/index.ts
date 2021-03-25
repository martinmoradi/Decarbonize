import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tripsReducer from './tripsReducer';
import emissionsReducer from './emissionsReducer';
import onboardingReducer from './onboarding';
import mealReducer from './mealsReducer';
import fixedEmissionsReducer from './fixedEmissionsReducer';

const reducers = combineReducers({
  authentication: authReducer,
  trips: tripsReducer,
  emissions: emissionsReducer,
  onboarding: onboardingReducer,
  fixedEmissions: fixedEmissionsReducer,
  meals: mealReducer
});


export default reducers;

export type RootState = ReturnType<typeof reducers>;
