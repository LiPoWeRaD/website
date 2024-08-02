import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { store } from "../store";
import LoadAnimBlock from "../ul/LoadAnimBlock";
import InfoFilm from "../ul/infoFilm";
import { UseActions } from "../hooks/useActions";

interface SearchFilmProps {
    searchFilm: string
}
const SearchFilm: FC<SearchFilmProps> = (title) => {
    const { fetchFilterFilms } = UseActions()
    const [data, setData] = useState(store.getState().fetchFilterReducer)

    useEffect(() => {
        fetchFilterFilms('title', title.searchFilm)
    }, [title.searchFilm])
    
    store.subscribe(() => {
        if (data !== store.getState().fetchFilterReducer) {
            setTimeout(() => {
                setData(store.getState().fetchFilterReducer || [])
            }, 100);
        }
    })

    const films = data.film?.filter((el) => el.title.toLowerCase().includes(title.searchFilm.toLowerCase())).slice(0, 5)

    return (
        <ul className="flex md:flex-col w-full p-4 gap-x-10 gap-y-10 md:flex-wrap absolute top-14 bg-whiteCustom dark:bg-btnCustom rounded-b-lg z-50 overflow-auto">
            {data.loading ? <LoadAnimBlock /> : films?.length === 0 ? <p>Ничего не найдено</p> : films?.map((el) => 
                <li key={el.id} className="flex mb-10 md:mb-0">
                    <Link to={`/movie/${el.id}`} className="flex" >
                        <div className="flex flex-wrap gap-x-4 gap-y-3">
                            <img src={el.posterUrl} alt={el.title} className="max-w-[158px] h-[206px] md:max-w-[30px] md:max-h-[50px]" />
                            <div className="flex flex-col justify-between ">
                                <InfoFilm classname="flex flex-wrap items-center gap-x-5 z-10 text-xs" width="10" height="10" tmdbRating={el.tmdbRating} releaseDate={el.releaseDate} genres={el.genres} runtime={el.runtime}/>
                                <p className="text-lg font-bold">{el.title}</p>
                            </div>
                        </div>
                    </Link>
                </li>
            )}
        </ul>
    )
}

export default SearchFilm