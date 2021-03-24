export enum UserCommitmentsActionType {
  POST_USER_COMMITMENTS_ATTEMPT = 'post_user_commitments_attempt',
  POST_USER_COMMITMENTS_SUCCESS = 'post_user_commitments_success',
  POST_USER_COMMITMENTS_ERROR = 'post_user_commitments_error',
}

export interface UserCommitmentsType {
    appliances: boolean;
    reduced_heating: boolean;
    eco_driving: boolean;
    tap_water: boolean;
    food_wastes: boolean;
    bulk_food: boolean;
    zero_wastes: boolean;
} 