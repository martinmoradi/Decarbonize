import { combineReducers } from 'redux';
import energyReducer from './energyReducer';
import foodReducer from './foodReducer';
import spendingReducer from './spendingReducer';

const onboardingReducer = combineReducers({
  food: foodReducer,
  energy: energyReducer,
  spending: spendingReducer,
});

export default onboardingReducer;
