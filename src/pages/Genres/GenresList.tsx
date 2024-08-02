import CardGenres from "../../components/CardGenres"
import LoadAnimBlock from "../../ul/LoadAnimBlock"
import { Link, useParams } from "react-router-dom"
import Genres from "../../components/Genres"
import arrowSVG from "../../svg/arrowSVG"
import { Key, useEffect, useState } from "react"
import { UseActions } from "../../hooks/useActions"
import { store } from "../../store"
import Error from "../../ul/error"



const GenresList = () => {
    const { genre } = useParams()

    const { fetchGenres } = UseActions()
    const [data, setData] = useState(store.getState().fetchGenresReducer)
    
    useEffect(() => {
        fetchGenres()
        store.subscribe(() => {
            setData(store.getState().fetchGenresReducer)
        })    
    }, [])
    
    const Header: JSX.Element = genre ? 
        <Link to={`/Genres`} className="flex mb-16 items-center w-min gap-x-4 text-2xl sm:text-5xl font-bold text-nowrap">
            {arrowSVG({classname: 'fill-blackCustom dark:fill-whiteCustom'})}{genre.charAt(0).toUpperCase() + genre.slice(1)}</Link> : 
        <h2 className="flex mb-16 text-2xl sm:text-5xl font-bold">Жанры фильмов</h2> 

    const List: JSX.Element = !genre ? <> {data.filmGenres?.map((el: string, index: Key | null | undefined) => <CardGenres genre={el} key={index} /> )} </> : <> {<Genres genre={genre} />} </>

    return (
        <main className=" pt-6 lg:pt-[160px]">
            <section className="relative container p-0 mb-16 text-blackCustom dark:text-whiteCustom">
                {Header}
                <ul className="flex justify-center md:justify-start gap-x-10 gap-y-16 flex-wrap">
                    {data.loading ? <LoadAnimBlock /> : data.error ? <Error error={data.error} /> : List}
                </ul>
            </section>
            
        </main>
    )
}

export default GenresList