import { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { store } from "../store";
import { UseActions } from "../hooks/useActions";
import MovieProps from "../types/MovieProps";
import Buttons from "../ul/buttons";
import crossSVG from "../svg/crossSVG";


const FavoritesFilm: FC = () => {
    const { fetchDeleteFavorites, fetchGetFavorites } = UseActions();

    const hanldeDelete = (id: number) => {
        fetchDeleteFavorites(id);
    }

    useEffect(() => {
        fetchGetFavorites();
    }, []);

    const [nextFilm, setNextFilm] = useState<MovieProps[]>(store.getState().GetFavoritesReducer.film || []);

    store.subscribe(() => {
        if (nextFilm !== store.getState().GetFavoritesReducer.film) {
            setTimeout(() => {
                setNextFilm(store.getState().GetFavoritesReducer.film || []);
            }, 100); 
        }
    })

    return <div className="-ml-[9vh] left-1/2 flex gap-x-3">
        <ul className="flex pl-16 gap-x-9 items-center md:mb-[120px] md:py-0 md:flex-wrap overflow-x-auto md:overflow-visible">
                {Array.isArray(nextFilm) && nextFilm.map((el) =>
                <li key={el.id} className="my-16">
                    <div className="relative w-[208px] border border-blackCustom dark:border-whiteCustom rounded-3xl bg-bgNoneCardCustom shadow-[0_0_80px_0_#000] dark:shadow-[0_0_80px_0_#FFFFFF54]">
                        <Buttons className="absolute p-3 -top-6 -right-6 font-bold rounded-full bg-blackCustom dark:bg-whiteCustom" onClick={() => hanldeDelete(el.id)}>

                            {crossSVG({ classname: "cursor-pointer fill-whiteCustom dark:fill-blackCustom w-[24px] h-[24px]" })}
                        </Buttons>
                        <Link to={`/movie/${el.id}`} className="w-[208px] h-[336px]"><img className="rounded-3xl w-[208px] h-[336px]" src={el.posterUrl} alt="" /></Link>
                    </div>
                </li>)}
            </ul>
    </div>
}

export default FavoritesFilm