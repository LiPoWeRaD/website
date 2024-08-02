import { Dispatch } from "redux";
import { FilmAction, FilmType } from "../../types/film";
import API from "../../api/API_URL"; 
import { AddDeleteFilmActionType, FilmAddDeleteType } from "../../types/FavoriteFilm";


export const fetchGetFavorites = () => {
    return async (dispatch: Dispatch<AddDeleteFilmActionType>) => {
        dispatch({ type: FilmAddDeleteType.FILM_FAVORITE });
        await API.get(`favorites`, { withCredentials: true })
            .then((response) => dispatch({ type: FilmAddDeleteType.FILM_FAVORITE_SUCCESS, payload: response.data }))
            .catch((error) => dispatch({ type: FilmAddDeleteType.FILM_FAVORITE_ERROR, payload: error.message }));
    }
}

export const fetchDeleteFavorites = (id: number) => {
    return async (dispatch: Dispatch<AddDeleteFilmActionType>) => {
        dispatch({ type: FilmAddDeleteType.DELETE_FILM });
        await API.delete(`favorites/${id}`, { withCredentials: true })
            .then((response) => dispatch({ type: FilmAddDeleteType.DELETE_FILM_SUCCESS, payload: response.data }))
            .catch((error) => dispatch({ type: FilmAddDeleteType.DELETE_FILM_ERROR, payload: error.message }));

        await API.get(`favorites`, { withCredentials: true })
            .then((response) => dispatch({ type: FilmAddDeleteType.FILM_FAVORITE_SUCCESS, payload: response.data }))
            .catch((error) => dispatch({ type: FilmAddDeleteType.FILM_FAVORITE_ERROR, payload: error.message }));
    }
}

export const fetchAddFavorites = (id: string) => {
    return async (dispatch: Dispatch<AddDeleteFilmActionType>) => {
        dispatch({ type: FilmAddDeleteType.ADD_FILM });
        await API.post(`favorites`, { id }, { withCredentials: true })
            .then(() => dispatch({ type: FilmAddDeleteType.ADD_FILM_SUCCESS, payload: id }))
            .catch((error) => dispatch({ type: FilmAddDeleteType.ADD_FILM_ERROR, payload: error.message }));

        await API.get(`favorites`, { withCredentials: true })
            .then((response) => dispatch({ type: FilmAddDeleteType.FILM_FAVORITE_SUCCESS, payload: response.data }))
            .catch((error) => dispatch({ type: FilmAddDeleteType.FILM_FAVORITE_ERROR, payload: error.message }));
    }
}

export const fetchFilterFilms = (filter: string = 'genre', value: string) => {
    return async (dispatch: Dispatch<FilmAction>) => {
        dispatch({ type: FilmType.FETCH_FILMS });
        await API.get(`movie?${filter}=${value}`, { withCredentials: true })
            .then((response) => dispatch({ type: FilmType.FETCH_FILMS_SUCCESS, payload: response.data }))
            .catch((error) => dispatch({ type: FilmType.FETCH_FILMS_ERROR, payload: error.message }));
    }
}
export const fetchMovieRating = () => {
    return async (dispatch: Dispatch<FilmAction>) => {
        dispatch({ type: FilmType.FETCH_FILMS });
        await API.get(`movie/top10`, { withCredentials: true })
            .then((response) => dispatch({ type: FilmType.FETCH_FILMS_SUCCESS, payload: response.data }))
            .catch((error) => dispatch({ type: FilmType.FETCH_FILMS_ERROR, payload: error.message }));
    }
}

// export const fetchDeleteFromFavorites = (id: string) => {
//     return async (dispatch: Dispatch<AddDeleteFilmActionType>) => {
//         dispatch({ type: FilmAddDeleteType.DELETE_FILM });
//         await API.delete(`favorites/${id}`, { withCredentials: true })
//             .then(() => dispatch({ type: FilmAddDeleteType.DELETE_FILM_SUCCESS, payload: id }))
//             .catch((error) => dispatch({ type: FilmAddDeleteType.DELETE_FILM_ERROR, payload: error.message }));
//     }
// }

export const fetchMovieId = (movieId: string) => {
    return async (dispatch: Dispatch<FilmAction>) => {
        dispatch({ type: FilmType.FETCH_FILM });
        await API.get(`movie/${movieId}`, { withCredentials: true })
            .then((response) => dispatch({ type: FilmType.FETCH_FILM_SUCCESS, payload: response.data }))
            .catch((error) => dispatch({ type: FilmType.FETCH_FILMS_ERROR, payload: error.message }));
    }
}


export const fetchMovieRandom = () => {
    return async (dispatch: Dispatch<FilmAction>) => {
        dispatch({ type: FilmType.FETCH_FILM });
        await API.get(`movie/random`, { withCredentials: true })
            .then((response) => dispatch({ type: FilmType.FETCH_FILM_SUCCESS, payload: response.data }))
            .catch((error) => dispatch({ type: FilmType.FETCH_FILMS_ERROR, payload: error.message }));
    }
}

export const fetchGenres = () => {
    return async (dispatch: Dispatch<FilmAction>) => {
        dispatch({ type: FilmType.FETCH_FILM_GENRES });
        await API.get(`movie/genres`, { withCredentials: true })
            .then((response) => dispatch({ type: FilmType.FETCH_FILM_GENRES_SUCCESS, payload: response.data }))
            .catch((error) => dispatch({ type: FilmType.FETCH_FILM_GENRES_ERROR, payload: error.message }));
    }
}
