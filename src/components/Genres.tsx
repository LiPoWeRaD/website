import { FC, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { store } from "../store"
import { UseActions } from "../hooks/useActions"
import Buttons from "../ul/buttons"

interface FilterProps {
    genre: string,
}
const Genres:FC<FilterProps> = ( genre ) => {
    const { fetchFilterFilms } = UseActions()

    useEffect(() => {
        fetchFilterFilms('genre', genre.genre) 
    }, [])
    
    const [genreFilms, setGenreFilms] = useState(store.getState().fetchFilterReducer);


    store.subscribe(() => {
        if (genreFilms !== store.getState().fetchFilterReducer) {                               
            setGenreFilms(store.getState().fetchFilterReducer);
        }
    })    

    const { count = '10' } = useParams();

    const className = `relative flex flex-col w-[224px] h-[304px] rounded-3xl shadow-[0_0_80px_0_#000] dark:shadow-[0_0_80px_0_#FFFFFF54]`

    const [moreFilms, setMoreFilms] = useState(parseInt(count) || 10)
    

    const handleMoreFilms = () => {
        setMoreFilms(moreFilms + 10)
    }

    const [showButton, setShowButton] = useState(true)

    useEffect(() => {
        if (genreFilms.film !== undefined && Math.ceil(genreFilms.film.length / 10) <= moreFilms / 10) {             
            setShowButton(false)            
        } else {
            setShowButton(true)
        }
    }, [genreFilms.film, moreFilms])
  
    return (
        <div className="md:mb-[160px] flex flex-col">
        <ul className="flex justify-center md:justify-start mb-16 gap-x-10 gap-y-16 flex-wrap">
            {genreFilms.film === undefined ? 
            <h2 className="text-lg font-bold text-blackCustom dark:text-whiteCustom ">{genreFilms.error}</h2> : 
            genreFilms.film?.slice(0, moreFilms).map((el) => (
                <li key={el.id} className={className}>
                    <Link to={`/movie/${el.id}`} className="w-full h-full">
                        <img className="rounded-3xl w-full h-full" src={el.posterUrl} alt="" />
                    </Link>
                </li>
            ))}
        </ul>
        {showButton && (
            <Buttons 
                onClick={handleMoreFilms} 
                type="button" 
                className="text-lg font-bold text-center self-center py-4 px-12 bg-[#6A5DC2] rounded-[28px] text-blackCustom dark:text-whiteCustom  hover-never:bg-[#D6D2F1] focus:bg-[#8577E1]">
                    Показать ещё
            </Buttons>
        )}
        </div>
    )
}

export default Genres