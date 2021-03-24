import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tripsReducer from './tripsReducer';
import emissionsReducer from './emissionsReducer';
import onboardingReducer from './onboarding';

const reducers = combineReducers({
  authentication: authReducer,
  trips: tripsReducer,
  emissions: emissionsReducer,
  onboarding: onboardingReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
