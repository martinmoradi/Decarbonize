import { combineReducers } from 'redux';
import authReducer from './authReducer';
import emissionsReducer from './emissionsReducer';
import mealReducer from './mealsReducer';
import onboardingReducer from './onboarding';
import tripsReducer from './tripsReducer';

const reducers = combineReducers({
  authentication: authReducer,
  trips: tripsReducer,
  emissions: emissionsReducer,
  onboarding: onboardingReducer,
  meals: mealReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
