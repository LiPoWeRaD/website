import { FC } from "react"
import { Link } from "react-router-dom"

interface CardProps {
    genre: string
}

const CardGenres: FC<CardProps> = ({ genre }) => {
    const className = "relative flex flex-col-reverse text-black h-[304px] rounded-3xl shadow-[0_0_80px_0_#000] dark:shadow-[0_0_80px_0_#FFFFFF54]"
    const countFilm: number = 10
    return (
        <li className="w-[335px] sm:w-[224px]">
            <Link to={`/Genres/${genre}/${countFilm}`} style={{backgroundImage: 'url(' + require(`../assets/genre/${genre.charAt(0).toUpperCase() + genre.slice(1)}.webp`) + ')',
        backgroundSize: 'cover'}} className={className}>
                <p className="text-center text-2xl font-bold pt-[22px] pb-[30px] text-blackCustom dark:text-whiteCustom bg-whiteCustom dark:bg-blackGenretitleCustom rounded-b-3xl">{genre.charAt(0).toUpperCase() + genre.slice(1)}</p>
            </Link>
        </li>
    )
}

export default CardGenres