import { FC } from "react";
import rating from "./rating";


interface Props {
    tmdbRating: number | undefined;
    releaseDate: string | undefined;
    genres: string[] | undefined;
    runtime: number | undefined;
    classname?: string | undefined;
    width?: string | undefined;
    height?: string | undefined;
}

const InfoFilm: FC<Props> = ({ tmdbRating, releaseDate, genres, runtime, ...props }) => {
    return (
        <>
        <ul className={props.classname}>
            <li className="font-bold">{rating({ rating: parseFloat(tmdbRating ? tmdbRating.toFixed(1) : "0"), width: props.width, height: props.height})}</li>
            <li>{releaseDate ? releaseDate.split('-')[0] : ""}</li>
            <li className="flex flex-wrap gap-x-1">{genres ? genres.map((genre) => <p key={genre}>{genre}</p>) : ""}</li>
            <li>{Math.floor(runtime ? runtime / 60 : 0) + " ч "}{runtime ?runtime % 60 + " мин" : ""}</li>
        </ul>
        </>
    )
}

export default InfoFilm