export enum LoginActionType {
    LOGIN_REQUEST = 'LOGIN_REQUEST',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_ERROR = 'LOGIN_ERROR',
    LOGOUT = 'LOGOUT',
    LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
    LOGOUT_ERROR = 'LOGOUT_ERROR',
}

interface LoginUserProps {
    loading: boolean;
    result: boolean;
}

interface LoginUserAction {
    type: LoginActionType.LOGIN_REQUEST;
    payload: LoginUserProps
}

interface LoginUserSuccessAction {
    type: LoginActionType.LOGIN_SUCCESS;
    payload: LoginUserProps
}

interface LoginUserFailureAction {
    type: LoginActionType.LOGIN_ERROR;
    payload: string;
}

interface LoginLogoutAction {
    type: LoginActionType.LOGOUT
}

interface LoginLogoutSuccessAction {
    type: LoginActionType.LOGOUT_SUCCESS
}

interface LoginLogoutFailureAction {
    type: LoginActionType.LOGOUT_ERROR
    payload: string
}

export type LoginUser = 
    LoginUserAction 
    | LoginUserSuccessAction 
    | LoginUserFailureAction 
    | LoginLogoutAction
    | LoginLogoutSuccessAction
    | LoginLogoutFailureAction

