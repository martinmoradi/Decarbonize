import { useContext } from 'react';
import { AuthContext } from '../Authentication/authContext';
import { configQuiz } from './api';
import OnboardingContext from './onboardingContext/OnboardingContext';

export const sendQuizToApi = async ()=>{
    const { state } = useContext(AuthContext);
    const { onboardingData } = useContext(OnboardingContext);

    const response = await fetch(`https://decarbonize-perruches.herokuapp.com/api/v1/fixed_emissions`, configQuiz('POST', onboardingData  , state.token));
    const {error } = await response.json();
    if (response.ok) {
        console.log("bien envoyé à api");
      } else {
        console.log(error.message)
      }
};