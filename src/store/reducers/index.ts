import { combineReducers } from "redux";
import { loginUserReducer, userReducer, registerUserReducer, logoutUserReducer } from "./userReducer";
import { filmReducer, deleteFilmReducer, fetchFilterReducer, GetFavoritesReducer, fetchAddToFavoritesReducer, fetchMovieIdReducer, fetchMovieRatingReducer, fetchMovieRandomReducer, fetchGenresReducer } from "./filmReducer";
import { fetchMovieRandom } from "../action-creators/film";


export const rootReducer = combineReducers({
    user: userReducer, 
    login: loginUserReducer,
    registeration: registerUserReducer,
    filmReducer,
    deleteFilmReducer,
    fetchFilterReducer,
    GetFavoritesReducer,
    fetchAddToFavoritesReducer,
    fetchMovieIdReducer,
    fetchMovieRandomReducer,
    fetchMovieRatingReducer,
    fetchMovieRandom,
    fetchGenresReducer,
    logoutUserReducer,
})

export type RootState = ReturnType<typeof rootReducer>