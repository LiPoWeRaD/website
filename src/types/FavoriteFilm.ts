import MovieProps from "./MovieProps"


export enum FilmAddDeleteType {
    DELETE_FILM = 'DELETE_FILM',
    DELETE_FILM_SUCCESS = 'DELETE_FILM_SUCCESS',
    DELETE_FILM_ERROR = 'DELETE_FILM_ERROR',

    ADD_FILM = 'ADD_FILM',
    ADD_FILM_SUCCESS = 'ADD_FILM_SUCCESS',
    ADD_FILM_ERROR = 'ADD_FILM_ERROR',

    FILM_FAVORITE = 'FILM_FAVORITE',
    FILM_FAVORITE_SUCCESS = 'FILM_FAVORITE_SUCCESS',
    FILM_FAVORITE_ERROR = 'FILM_FAVORITE_ERROR',
}

export interface DeleteFilmState {
    id: string | undefined
    loading: boolean
    isSuccess: boolean
    error: null | string
}

export interface AddFilmState {
    id: string | undefined
    loading: boolean,
    isSuccess: boolean
    error: null | string
}

export interface FavoriteFilmState {
    film: MovieProps[] | undefined
    loading: boolean,
    isSuccess: boolean
    error: null | string
}

interface DeleteFilmAction {
    type: FilmAddDeleteType.DELETE_FILM
}

interface DeleteFilmSuccessAction {
    type: FilmAddDeleteType.DELETE_FILM_SUCCESS
    payload: string
}

interface DeleteFilmErrorAction {
    type: FilmAddDeleteType.DELETE_FILM_ERROR
    payload: string
}


interface AddFilmAction {
    type: FilmAddDeleteType.ADD_FILM
}

interface AddFilmSuccessAction {
    type: FilmAddDeleteType.ADD_FILM_SUCCESS
    payload: string
}

interface AddFilmErrorAction {
    type: FilmAddDeleteType.ADD_FILM_ERROR
    payload: string
}

interface FavoriteFilmAction {
    type: FilmAddDeleteType.FILM_FAVORITE
}

interface FavoriteFilmSuccessAction {
    type: FilmAddDeleteType.FILM_FAVORITE_SUCCESS
    payload: MovieProps[]
}

interface FavoriteFilmErrorAction {
    type: FilmAddDeleteType.FILM_FAVORITE_ERROR
    payload: string
}

export type AddDeleteFilmActionType = 
    DeleteFilmAction 
    | DeleteFilmSuccessAction 
    | DeleteFilmErrorAction
    | AddFilmAction
    | AddFilmSuccessAction
    | AddFilmErrorAction
    | FavoriteFilmAction
    | FavoriteFilmSuccessAction
    | FavoriteFilmErrorAction