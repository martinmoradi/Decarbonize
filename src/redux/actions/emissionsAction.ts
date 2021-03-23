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

interface PutEmissionsAttempt {
  type: EmissionsActionType.PUT_EMISSIONS_ATTEMPT;
}

interface PutEmissionsSuccess {
  type: EmissionsActionType.PUT_EMISSIONS_SUCCESS;
  payload: EmissionsType;
}

interface PutEmissionsError {
  type: EmissionsActionType.PUT_EMISSIONS_ERROR;
  payload: string;
}

interface EmissionsReset {
  type: EmissionsActionType.EMISSIONS_RESET;
}

export type EmissionsAction =
  | PostEmissionsAttempt
  | PostEmissionsSuccess
  | PostEmissionsError
  | FetchEmissionsAttempt
  | FetchEmissionsSuccess
  | FetchEmissionsError
  | PutEmissionsAttempt
  | PutEmissionsSuccess
  | PutEmissionsError
  | EmissionsReset;
