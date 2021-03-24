import { UserCommitmentsActionType, UserCommitmentsType } from "../types"

interface PostUserCommitmentsAttempt {
  type: UserCommitmentsActionType.POST_USER_COMMITMENTS_ATTEMPT;
}

interface PostUserCommitmentsSuccess {
  type: UserCommitmentsActionType.POST_USER_COMMITMENTS_SUCCESS;
  payload: UserCommitmentsType;
}

interface PostUserCommitmentsError {
  type: UserCommitmentsActionType.POST_USER_COMMITMENTS_ERROR;
  payload: string;
}

export type UserCommitmentsAction = 
  |PostUserCommitmentsAttempt
  |PostUserCommitmentsSuccess
  |PostUserCommitmentsError