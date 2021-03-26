import { UserCommitmentsActionType } from "../types"

interface PostUserCommitmentsAttempt {
  type: UserCommitmentsActionType.POST_USER_COMMITMENTS_ATTEMPT;
}

interface PostUserCommitmentsError {
  type: UserCommitmentsActionType.POST_USER_COMMITMENTS_ERROR;
  payload: string;
}

interface DelUserCommitmentsAttempt {
  type: UserCommitmentsActionType.DEL_USER_COMMITMENTS_ATTEMPT;
}
interface DelUserCommitmentsError {
  type: UserCommitmentsActionType.DEL_USER_COMMITMENTS_ERROR;
  payload: string;
}

export type UserCommitmentsAction = 
  |PostUserCommitmentsAttempt
  |PostUserCommitmentsError
  |DelUserCommitmentsAttempt
  |DelUserCommitmentsError