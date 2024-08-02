import { AddDeleteFilmActionType, AddFilmState, DeleteFilmState, FavoriteFilmState, FilmAddDeleteType } from "../../types/FavoriteFilm";
import { FilmAction, FilmFavoritesState, FilmGegrenresState, FilmRandomState, FilmsState, FilmState, FilmType } from "../../types/film";


const initialFilmRandom: FilmRandomState = {
    film: undefined,
    loading: false,
    isSuccess: false,
    error: null
}

const initialState: FilmsState = {
    film: undefined,
    loading: false,
    isSuccess: false,
    error: null    
}

const initialFilmFavorites: FilmFavoritesState = {
    film: undefined,
    loading: false,
    isSuccess: false,
    error: null
}

const initialAddFilmState: AddFilmState = {
    id: undefined,
    loading: false,
    isSuccess: false,
    error: null
}

const initialDeleteFilmState: DeleteFilmState = {
    id: undefined,
    loading: false,
    isSuccess: false,
    error: null    
}


const initialGenres: FilmGegrenresState = {
    filmGenres: undefined,
    loading: false,
    isSuccess: false,
    error: null
}

const initialFilmState: FilmState = {
    film: undefined,
    loading: false,
    isSuccess: false,
    error: null
} 


export const fetchMovieRandomReducer = (state = initialFilmRandom, action: FilmAction): FilmRandomState => {
    switch (action.type) {
        case FilmType.FETCH_FILM:
            return {
                ...state,
                loading: true
            }
        case FilmType.FETCH_FILM_SUCCESS:
            return {
                ...state,
                film: action.payload,
                loading: false,
                isSuccess: true
            }
        case FilmType.FETCH_FILMS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}


export const fetchMovieIdReducer = (state = initialFilmState, action: FilmAction): FilmState => {
    switch (action.type) {
        case FilmType.FETCH_FILM:
            return {
                ...state,
                loading: true
            }
        case FilmType.FETCH_FILM_SUCCESS:
            return {
                ...state,
                film: action.payload,
                loading: false,
                isSuccess: true
            }
        case FilmType.FETCH_FILMS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export const fetchMovieRatingReducer = (state = initialState, action: FilmAction): FilmsState => {
    switch (action.type) {
        case FilmType.FETCH_FILMS:
            return {
                ...state,
                loading: true
            }
        case FilmType.FETCH_FILMS_SUCCESS:
            return {
                ...state,
                film: action.payload,
                loading: false,
                isSuccess: true
            }
        case FilmType.FETCH_FILMS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }    
        default:
            return state
    }
}

export const GetFavoritesReducer = (state = initialFilmFavorites, action: AddDeleteFilmActionType): FavoriteFilmState => {
    switch (action.type) {
        case FilmAddDeleteType.FILM_FAVORITE:
            return {
                ...state,
                loading: true
            }
        case FilmAddDeleteType.FILM_FAVORITE_SUCCESS:
            return {
                ...state,
                film: action.payload,
                loading: false,
                isSuccess: true
            }
        case FilmAddDeleteType.FILM_FAVORITE_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}


export const filmReducer = (state = initialState, action: FilmAction): FilmsState => {
    switch (action.type) {
        case FilmType.FETCH_FILMS:
            return {
                ...state,
                loading: true
            }
        case FilmType.FETCH_FILMS_SUCCESS:
            return {
                ...state,
                film: action.payload,
                loading: false,
                isSuccess: true
            }
        case FilmType.FETCH_FILMS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export const fetchAddToFavoritesReducer = (state = initialAddFilmState, action: AddDeleteFilmActionType): AddFilmState => {
    switch (action.type) {
        case FilmAddDeleteType.ADD_FILM:
            return {
                ...state,
                loading: true
            }
        case FilmAddDeleteType.ADD_FILM_SUCCESS:
            return {
                ...state,
                id: action.payload,
                loading: false,
                isSuccess: true
            }
        case FilmAddDeleteType.ADD_FILM_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export const deleteFilmReducer = (state = initialDeleteFilmState, action: AddDeleteFilmActionType): DeleteFilmState => {
    switch (action.type) {
        case FilmAddDeleteType.DELETE_FILM:
            return {
                ...state,
                loading: true
            }
        case FilmAddDeleteType.DELETE_FILM_SUCCESS:
            return {
                ...state,
                id: action.payload,
                loading: false,
                isSuccess: true
            }
        case FilmAddDeleteType.DELETE_FILM_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export const fetchFilterReducer = (state = initialState, action: FilmAction): FilmsState => {
    switch (action.type) {
        case FilmType.FETCH_FILMS:
            return {
                ...state,
                loading: true
            }
        case FilmType.FETCH_FILMS_SUCCESS:
            return {
                ...state,
                film: action.payload,
                loading: false,
                isSuccess: true
            }
        case FilmType.FETCH_FILMS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export const fetchGenresReducer = (state = initialGenres, action: FilmAction): FilmGegrenresState => {
    switch (action.type) {
        case FilmType.FETCH_FILM_GENRES:
            return {
                ...state,
                loading: true
            }
        case FilmType.FETCH_FILM_GENRES_SUCCESS:
            return {
                ...state,
                filmGenres: action.payload,
                loading: false,
                isSuccess: true
            }
        case FilmType.FETCH_FILM_GENRES_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}