import { combineReducers } from 'redux';
import authReducer from './authReducer';
import onboardingReducer from './onboardingReducer';
import tripsReducer from './tripsReducer';
import emissionsReducer from './emissionsReducer';

const reducers = combineReducers({
  authentication: authReducer,
  onboarding: onboardingReducer,
  trips: tripsReducer,
  emissions: emissionsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
