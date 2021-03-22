import { EmissionsActionType, EmissionsType } from '../types';

interface PostEmissionsAttempt {
  type: EmissionsActionType.POST_EMISSIONS_ATTEMPT;
}

interface PostEmissionsSuccess {
  type: EmissionsActionType.POST_EMISSIONS_SUCCESS;
  payload: EmissionsType;
}

interface PostEmissionsError {
  type: EmissionsActionType.POST_EMISSIONS_ERROR;
  payload: string;
}

interface FetchEmissionsAttempt {
  type: EmissionsActionType.FETCH_EMISSIONS_ATTEMPT;
}

interface FetchEmissionsSuccess {
  type: EmissionsActionType.FETCH_EMISSIONS_SUCCESS;
  payload: EmissionsType;
}

interface FetchEmissionsError {
  type: EmissionsActionType.FETCH_EMISSIONS_ERROR;
  payload: string;
}

export type EmissionsAction =
  | PostEmissionsAttempt
  | PostEmissionsSuccess
  | PostEmissionsError
  | FetchEmissionsAttempt
  | FetchEmissionsSuccess
  | FetchEmissionsError;
