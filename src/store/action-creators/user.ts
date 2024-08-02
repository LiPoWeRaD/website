import { Dispatch } from "redux";
import { UserAction, UserActionType } from "../../types/user";
import API from "../../api/API_URL";
import { LoginActionType, LoginUser } from "../../types/loginUser";
import { RegisterationActionType, RegisterationUserAction } from "../../types/registerationUser";
import ProfileProps from "../../types/ProfileProps";




export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<LoginUser>) => {
    try {
      dispatch({ type: LoginActionType.LOGIN_REQUEST, payload: { loading: true, error: false, result: false } });
      const response = (await API.post(`auth/login`, { email, password }, { withCredentials: true })).data;
      dispatch({ type: LoginActionType.LOGIN_SUCCESS, payload: response });
      
    } catch (error) {
      dispatch({ type: LoginActionType.LOGIN_ERROR, payload: "Something went wrong" });
    }
  }
}

export const fetchUser = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionType.FETCH_USER });
      const response: ProfileProps = (await API.get(`profile`, { withCredentials: true })).data;
      dispatch({ type: UserActionType.FETCH_USER_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: UserActionType.FETCH_USER_ERROR, payload: "Что-то пошло не так" });
    }
  };
};

export const registeration = (email: string, name: string, surname: string, password: string) => {  
  return async (dispatch: Dispatch<RegisterationUserAction>) => {
    try {
      dispatch({ type: RegisterationActionType.REGISTERATION_REQUEST, payload: { loading: true } });
      const response = (await API.post(`user`, { email, name, surname, password }, { withCredentials: true }));
      dispatch({ type: RegisterationActionType.REGISTERATION_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: RegisterationActionType.REGISTERATION_ERROR, payload: "Что-то пошло не так" });
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<LoginUser>) => {
    try {
      dispatch({ type: LoginActionType.LOGOUT });
      const response = (await API.get(`auth/logout`, { withCredentials: true })).data;
      dispatch({ type: LoginActionType.LOGOUT_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: LoginActionType.LOGOUT_ERROR, payload: "Что-то пошло не так" });
    }
  };
}