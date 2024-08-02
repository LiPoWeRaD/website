export enum RegisterationActionType {
    REGISTERATION_REQUEST = 'REGISTERATION_REQUEST',
    REGISTERATION_SUCCESS = 'REGISTERATION_SUCCESS',
    REGISTERATION_ERROR = 'REGISTERATION_ERROR',
}

interface ProfileProps {
    email: string
    password: string
    name: string
    surname: string
}

export interface RegisterationUserProps {
    profile: ProfileProps | undefined,
    loading: boolean,
    isSuccess: boolean
    error: null | string
}

export interface RegisterationUser {
    type: RegisterationActionType.REGISTERATION_REQUEST
}

export interface RegisterationUserSuccess {
    type: RegisterationActionType.REGISTERATION_SUCCESS
    payload: RegisterationUserProps
}

export interface RegisterationUserError {
    type: RegisterationActionType.REGISTERATION_ERROR
    payload: string
}

export type RegisterationUserAction = RegisterationUser | RegisterationUserSuccess | RegisterationUserError