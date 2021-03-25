import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tripsReducer from './tripsReducer';
import emissionsReducer from './emissionsReducer';
import onboardingReducer from './onboarding';
import fixedEmissionsReducer from './fixedEmissionsReducer';

const reducers = combineReducers({
  authentication: authReducer,
  trips: tripsReducer,
  emissions: emissionsReducer,
  onboarding: onboardingReducer,
  fixedEmissions: fixedEmissionsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
