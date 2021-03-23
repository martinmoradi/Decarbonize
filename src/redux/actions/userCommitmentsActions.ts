import { UserCommitmentsActionType } from "../types"

interface PostUserCommitmentsAttempt {
  type: UserCommitmentsActionType.POST_USER_COMMITMENTS_ATTEMPT;
}

interface PostUserCommitmentsSuccess {
  type: UserCommitmentsActionType.POST_USER_COMMITMENTS_SUCCESS;
  payload: boolean;
}

interface PostUserCommitmentsError {
  type: UserCommitmentsActionType.POST_USER_COMMITMENTS_ERROR;
  payload: string;
}

export type UserCommitementsAction = 
  |PostUserCommitmentsAttempt
  |PostUserCommitmentsSuccess
  |PostUserCommitmentsError
