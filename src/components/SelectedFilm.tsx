import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { store } from "../store";
import { UseActions } from "../hooks/useActions";
import MovieProps from "../types/MovieProps";
import LoadAnimBlock from "../ul/LoadAnimBlock";

const SelectedFilm = () => {
    const { movieId } = useParams();

    const { fetchMovieId} = UseActions();

    const [data, setData] = useState<MovieProps>();

    useEffect(() => {
        movieId && fetchMovieId(movieId)
        store.subscribe(() => { 
            if (movieId && store.getState().fetchMovieIdReducer.film) {
                setData(store.getState().fetchMovieIdReducer.film)
            }
        })
    }, [movieId])

    const spanSpace: JSX.Element = <span className="flex-grow mx-2 mb-1 border border-dotted border-blackCustom dark:border-blackPlaceholderCustom hidden md:block"></span>

    const FilmCaption = () => {
        return (
            <div className="md:mb-[120px] lg:px-0 md:container">
            <h2 className="mb-16 text-[40px] text-blackCustom dark:text-whiteCustom font-bold">О фильме</h2>
            <div className="max-w-[50%] flex flex-col gap-y-6 text-blackCustom dark:text-whiteCustom">
                <div className="flex flex-col md:flex-row md:items-end text-lg">
                    <span>Язык оригинала </span>
                    {spanSpace}
                    <span>{data?.language || 'Неизвестно'}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-end text-lg">
                    <span>Бюджет </span>
                    {spanSpace}
                    <span>{data?.budget || 'Неизвестно'}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-end text-lg">
                    <span>Выручка </span>
                    {spanSpace}
                    <span>{data?.revenue || 'Неизвестно'}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-end text-lg">
                    <span>Режиссёр </span>
                    {spanSpace}
                    <span>{data?.director || 'Неизвестно'}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-end text-lg">
                    <span>Продакшенер </span>
                    {spanSpace}
                    <span>{data?.production || 'Неизвестно'}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-end text-lg">
                    <span>Награды </span>
                    {spanSpace}
                    <span>{data?.awardsSummary || 'Неизвестно'}</span>
                </div>
            </div>
            </div>
        )
    }

    return (
        <main className="">
            {store.getState().fetchMovieIdReducer.loading ? <LoadAnimBlock/> : <FilmCaption/>}
        </main>
    )
}

export default SelectedFilm