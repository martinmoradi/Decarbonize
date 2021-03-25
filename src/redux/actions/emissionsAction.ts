import { EmissionsActionType, EmissionsType, FixedEmissionsType } from '../types';

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

interface FetchFixedEmissionsAttempt {
  type: EmissionsActionType.FETCH_FIXED_EMISSIONS_ATTEMPT;
}

interface FetchFixedEmissionsSuccess {
  type: EmissionsActionType.FETCH_FIXED_EMISSIONS_SUCCESS;
  payload: FixedEmissionsType;
}

interface FetchFixedEmissionsError {
  type: EmissionsActionType.FETCH_FIXED_EMISSIONS_ERROR;
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
  | FetchFixedEmissionsAttempt
  | FetchFixedEmissionsSuccess
  | FetchFixedEmissionsError
  | PutEmissionsAttempt
  | PutEmissionsSuccess
  | PutEmissionsError
  | EmissionsReset;
