import ProfileProps from "./ProfileProps";

export enum UserActionType {
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
}

export interface AuthState {
    profile: ProfileProps | undefined,
    loading: boolean,
    isSuccess: boolean
    error: null | string
}

interface FetchUserAction {
    type: UserActionType.FETCH_USER;
}

interface FetchUserSuccessAction {
    type: UserActionType.FETCH_USER_SUCCESS;
    payload: ProfileProps | undefined;
}

interface FetchUserErrorAction {
    type: UserActionType.FETCH_USER_ERROR;
    payload: string;
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction

