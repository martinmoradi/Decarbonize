import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tripsReducer from './tripsReducer';
import emissionsReducer from './emissionsReducer';
import onboardingReducer from './onboarding';
import userCommitmentsReducer from './userCommitmentsReducer'

const reducers = combineReducers({
  authentication: authReducer,
  trips: tripsReducer,
  emissions: emissionsReducer,
  onboarding: onboardingReducer,
  commitments: userCommitmentsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
