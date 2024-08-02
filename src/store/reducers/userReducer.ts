import { AuthState, UserAction, UserActionType } from "../../types/user"
import { LoginUserProps, LoginUser, LoginActionType } from "../../types/loginUser"
import { RegisterationUserAction, RegisterationActionType, RegisterationUserProps } from "../../types/registerationUser"



const initialState: AuthState = {
    profile: undefined,
    loading: false,
    isSuccess: false,
    error: null
}

const initialLoginUserState: LoginUserProps = {
    loading: false,
    result: false
}

const initialRegisterUserState: RegisterationUserProps = {
    profile: undefined,
    loading: false,
    isSuccess: false,
    error: null
}

export const registerUserReducer = (state = initialRegisterUserState, action: RegisterationUserAction): RegisterationUserProps => {
    switch (action.type) {
        case RegisterationActionType.REGISTERATION_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case RegisterationActionType.REGISTERATION_SUCCESS:
            return {
                ...state,
                loading: false,
                isSuccess: true
            }
        case RegisterationActionType.REGISTERATION_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const userReducer = (state = initialState, action: UserAction): AuthState => {
    switch (action.type) {
        case UserActionType.FETCH_USER:
            return {
                ...state,
                loading: true,
            }
        case UserActionType.FETCH_USER_SUCCESS:
            return {
                ...state,
                isSuccess: true,
                profile: action.payload
            }
        case UserActionType.FETCH_USER_ERROR:
            return {
                ...state,
                error: action.payload,

            }
        default:
            return state
    }
}


export const loginUserReducer = (state = initialLoginUserState, action: LoginUser): LoginUserProps => {
    switch (action.type) {
        case LoginActionType.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case LoginActionType.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                result: true
            }
        case LoginActionType.LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                result: false
            }
        default:
            return state
    }
}

export const logoutUserReducer = (state = initialLoginUserState, action: LoginUser): LoginUserProps => {
    switch (action.type) {
        case LoginActionType.LOGOUT:
            return {
                ...state,
                loading: true,
                result: false
            }
        case LoginActionType.LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                result: true
            }
        case LoginActionType.LOGOUT_ERROR:
            return {
                ...state,
                loading: false,
                result: false
            }
        default:
            return state
    }
}