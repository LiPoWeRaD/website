import { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { store } from "../store"
import { UseActions } from "../hooks/useActions"
import LoadAnimBlock from "../ul/LoadAnimBlock"
import Error from "../ul/error"

const MovieRatings:FC = () => {
    const { fetchMovieRating } = UseActions();
    const [data, setData] = useState(store.getState().fetchMovieRatingReducer);  

    useEffect(() => {
        fetchMovieRating()
        store.subscribe(() => {
            setData(store.getState().fetchMovieRatingReducer)
        })
    }, [])
    
    const ListFilms = () => {
        return (
            <ul className="flex pl-24  gap-x-9 items-center md:mb-[120px] md:py-0 md:flex-wrap overflow-x-auto">
                {data.film &&
                data.film?.map((el, index) =>
                <li key={el.id} className="my-16">
                    <div className="relative w-[208px] border border-bgNoneCardCustom rounded-3xl  bg-bgNoneCardCustom shadow-[0_0_80px_0_#000] dark:shadow-[0_0_80px_0_#FFFFFF54]">
                        <p className="absolute py-2 px-5 -top-4 -left-4 text-3xl font-bold rounded-[50px] text-blueCustom bg-white">{index + 1}</p>
                        <Link to={`/movie/${el.id}`} className="block w-[208px] h-[336px] "><img className="rounded-3xl w-[206px] h-[336px] " src={el.posterUrl} alt="" /></Link>
                    </div>
                </li>)}
            </ul>
        )
    }  

    return (
        <>
        <div className="md:container lg:px-0">
            <h2 className="text-[40px] font-bold text-blackCustom dark:text-placeholderCustom">Топ 10 фильмов</h2>
            <div className="text-2xl text-whiteCustom">
                {data.loading ? <LoadAnimBlock /> 
                    : data.isSuccess ? 
                        <div className="-ml-[6vh] sm:-ml-[9vh] md:-mr-0 2xl:-mr-[9vh] left-1/2">
                            <ListFilms />
                        </div>
                    : <Error error={data.error} />}
            </div>
        </div>
        </>
    )
}

export default MovieRatings