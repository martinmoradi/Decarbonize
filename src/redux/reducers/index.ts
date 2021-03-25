import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tripsReducer from './tripsReducer';
import emissionsReducer from './emissionsReducer';
import onboardingReducer from './onboarding';
import userCommitmentsReducer from './userCommitmentsReducer'
import mealReducer from './mealsReducer';

const reducers = combineReducers({
  authentication: authReducer,
  trips: tripsReducer,
  emissions: emissionsReducer,
  onboarding: onboardingReducer,
  commitments: userCommitmentsReducer,
  meals: mealReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
