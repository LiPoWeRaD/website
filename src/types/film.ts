import MovieProps from "./MovieProps";


export enum FilmType {
    FETCH_FILMS = 'FETCH_FILMS',
    FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS',
    FETCH_FILM = 'FETCH_FILM',
    FETCH_FILM_SUCCESS = 'FETCH_FILM_SUCCESS',
    FETCH_FILM_RANDOM = 'FETCH_FILM_RANDOM',
    FETCH_FILM_RANDOM_SUCCESS = 'FETCH_FILM_RANDOM_SUCCESS',
    DELETE_FILM = 'DELETE_FILM',
    DELETE_FILM_SUCCESS = 'DELETE_FILM_SUCCESS',
    ADDDELETE_FILM_FAVORITES = 'ADDDELETE_FILM_FAVORITES',
    ADDDELETE_FILM_FAVORITES_SUCCESS = 'ADDDELETE_FILM_FAVORITES_SUCCESS',
    ADDDELETE_FILM_FAVORITES_ERROR = 'ADDDELETE_FILM_FAVORITES_ERROR',
    DELETE_FILM_FAVORITES_SUCCESS = 'DELETE_FILM_FAVORITES_SUCCESS',
    DELETE_FILM_FAVORITES_ERROR = 'DELETE_FILM_FAVORITES_ERROR',
    FETCH_FILMS_ERROR = 'FETCH_FILMS_ERROR',
    FETCH_FILM_GENRES = 'FETCH_FILM_GENRES',
    FETCH_FILM_GENRES_SUCCESS = 'FETCH_FILM_GENRES_SUCCESS',
    FETCH_FILM_GENRES_ERROR = 'FETCH_FILM_GENRES_ERROR',
}

export interface FilmsState {
    film: MovieProps[] | undefined
    loading: boolean,
    isSuccess: boolean
    error: null | string
}

export interface FilmFavoritesState {
    film: MovieProps[] | undefined
    loading: boolean,
    isSuccess: boolean
    error: null | string
}

export interface FilmRandomState {
    film: MovieProps | undefined
    loading: boolean,
    isSuccess: boolean
    error: null | string
}

export interface FilmState {
    film: MovieProps | undefined
    loading: boolean,
    isSuccess: boolean
    error: null | string
}

export interface FilmGegrenresState {
    filmGenres: string[] | undefined
    loading: boolean,
    isSuccess: boolean
    error: null | string
}

export interface FilmAddDeleteFavoritesState {
    id: string | undefined
    loading: boolean,
    isSuccess: boolean
    error: null | string
}

interface FetchFilmAction {
    type: FilmType.FETCH_FILMS
}

interface FETCH_FILM {
    type: FilmType.FETCH_FILM
}

interface FETCH_FILM_SUCCESS {
    type: FilmType.FETCH_FILM_SUCCESS
    payload: MovieProps
}

interface FetchFilmSuccessAction {
    type: FilmType.FETCH_FILMS_SUCCESS
    payload: MovieProps[] | undefined
}

interface FetchFilmErrorAction {
    type: FilmType.FETCH_FILMS_ERROR
    payload: string
}

interface DeleteFilmSuccessAction {
    type: FilmType.DELETE_FILM_SUCCESS
    payload: string
}

interface FetchFilmDeleteAction {
    type: FilmType.DELETE_FILM
}

interface ADDADDDELETE_FILM_FAVORITES_FILM_FAVORITES {
    type: FilmType.ADDDELETE_FILM_FAVORITES
}

interface ADDADDDELETE_FILM_FAVORITES_FILM_FAVORITES_SUCCESS {
    type: FilmType.ADDDELETE_FILM_FAVORITES_SUCCESS
    payload: string
}

interface ADDADDDELETE_FILM_FAVORITES_FILM_FAVORITES_ERROR {
    type: FilmType.ADDDELETE_FILM_FAVORITES_ERROR
    payload: string
}

interface DELETE_FILM_FAVORITES_SUCCESS {
    type: FilmType.DELETE_FILM_FAVORITES_SUCCESS
}

interface DELETE_FILM_FAVORITES_ERROR {
    type: FilmType.DELETE_FILM_FAVORITES_ERROR
    payload: string
}

interface FETCH_FILM_RANDOM {
    type: FilmType.FETCH_FILM_RANDOM
}

interface FETCH_FILM_RANDOM_SUCCESS {
    type: FilmType.FETCH_FILM_RANDOM_SUCCESS
    payload: MovieProps
}

interface FETCH_FILM_GENRES {
    type: FilmType.FETCH_FILM_GENRES
}

interface FETCH_FILM_GENRES_SUCCESS {
    type: FilmType.FETCH_FILM_GENRES_SUCCESS
    payload: string[]
}

interface FETCH_FILM_GENRES_ERROR {
    type: FilmType.FETCH_FILM_GENRES_ERROR
    payload: string
}

export type FilmAction = 
    FetchFilmAction 
    | FetchFilmSuccessAction 
    | FetchFilmErrorAction 
    | FetchFilmDeleteAction 
    | DeleteFilmSuccessAction
    | ADDADDDELETE_FILM_FAVORITES_FILM_FAVORITES
    | ADDADDDELETE_FILM_FAVORITES_FILM_FAVORITES_SUCCESS
    | ADDADDDELETE_FILM_FAVORITES_FILM_FAVORITES_ERROR
    | DELETE_FILM_FAVORITES_SUCCESS
    | DELETE_FILM_FAVORITES_ERROR
    | FETCH_FILM
    | FETCH_FILM_SUCCESS
    | FETCH_FILM_RANDOM
    | FETCH_FILM_RANDOM_SUCCESS
    | FETCH_FILM_GENRES
    | FETCH_FILM_GENRES_SUCCESS
    | FETCH_FILM_GENRES_ERROR