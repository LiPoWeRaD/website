import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowModal from "./AuthModal";
import { store } from "../store";
import { UseActions } from "../hooks/useActions";
import MovieProps from "../types/MovieProps";
import Buttons from "../ul/buttons";
import Error from "../ul/error";
import LoadAnimBlock from "../ul/LoadAnimBlock";
import InfoFilm from "../ul/infoFilm";
import likeSVG from "../svg/likeSVG";
import reloadSVG from "../svg/reloadSVG";

const MovieRandom: FC = () => {
  const [ movie, setMovie] = useState<MovieProps>();
  const { movieId } = useParams();

  const [profile, setProfile] = useState(store.getState().user.profile);
  profile === undefined && setProfile({ name: "None", surname: "None", email: "None", favorites: [] });

  const { fetchMovieId, fetchMovieRandom, fetchGetFavorites, fetchDeleteFavorites, fetchAddFavorites } = UseActions();

  useEffect(() => {
    fetchGetFavorites();
    setTimeout(() => {
      movieId !== undefined ? fetchMovieId(movieId) : fetchMovieRandom();
      store.subscribe(() => {
        if (movieId !== undefined && store.getState().fetchMovieIdReducer.film) {
          setMovie(store.getState().fetchMovieIdReducer.film);
        }
        if (movieId === undefined && store.getState().fetchMovieRandomReducer.film) {
          setMovie(store.getState().fetchMovieRandomReducer.film);
        }
      });
    }, 200);
  }, [movieId]);
  
  const [star, setStar] = useState(false);

  const [data, setData] = useState(store.getState().GetFavoritesReducer.film);

  store.subscribe(() => {
    if (data !== store.getState().GetFavoritesReducer.film) {
      setData(store.getState().GetFavoritesReducer.film);
    }
  });

  const handleClick = async () => {
    setStar(!star);
    fetchGetFavorites();
    setData(store.getState().GetFavoritesReducer.film)
    if (movie && data) {
      if (data.some((films: MovieProps) => films.id === movie.id)) {
        fetchDeleteFavorites(movie.id);
        setStar(false);   
      } else {
        fetchAddFavorites(movie.id.toString());
        setStar(true);
      }
    }
  };

  const [openModel, setOpenModel] = useState(false);
 
  const handleCloseModal = () => {
    setOpenModel(false);
  };

  const handleOpenModal = () => {
    setOpenModel(true);
  };

  useEffect(() => {
  const fetchData = async () => {
    if (profile?.email !== "None") {
      const data = store.getState().GetFavoritesReducer.film;
      if (movie && data) {
        if (data.some((films: MovieProps) => films.id === movie.id)) {
          setStar(true);
        } else {
          setStar(false);
        }
      }
    }
  };
  fetchData();
  }, [movie, profile?.email]);

  useEffect(() => {
    store.subscribe(() => {
      if (profile !== store.getState().user.profile) {
        setProfile(store.getState().user.profile);
      }
    })
  }, [profile]);
    
  const likeStyle = star ? 
  `fill-[#B4A9FF] stroke-[""]` : 
  `fill-[] stroke-[#fff]`;

  const [open, setOpen] = useState(false);
 
  const handleClose = () => {
      setOpen(false);
  };
 
  const handleOpen = () => {
      setOpen(true);
  };

  return (
    <div className="  mb-10  z-0 lg:mb-0 bg-whiteCustom dark:bg-blackGenretitleCustom lg:pt-[202px] lg:pb-[122px] text-blackCustom dark:text-blackCaptionFooterCustom lg:flex">
      {movie ? 
       <>
          <div className="">
              <img className="mb-6 lg:mb-0 right-0 lg:absolute lg:top-0 w-[900px] h-[680px] bg-grayCustom" src={movie.posterUrl} alt="" />
          </div>
          <div className="relative  flex flex-col justify-between max-w-[600px] lg:h-[450px] z-10">
            <div>
              <InfoFilm classname="flex mb-4 items-center gap-x-5 z-10 text-lg" width="16" height="16" tmdbRating={movie.tmdbRating} releaseDate={movie.releaseDate} genres={movie.genres} runtime={movie.runtime} />
              <h2 className="mb-4 text-blackCustom dark:text-placeholderCustom text-5xl font-bold z-10">{movie.title}</h2>
              <p className="mb-8 lg:mb-0 text-2xl h-[200px] no-scrollbar overflow-y-auto z-10">{movie.plot}</p>
            </div>
            <div className="flex flex-wrap  gap-x-4 gap-y-4">
              <Buttons 
                type="button" 
                className="text-lg max-w-[251px] w-full sm:w-auto py-4 px-[48px] bg-[#6A5DC2] rounded-[28px] text-white hover-never:bg-[#D6D2F1] focus-visible:bg-[#8577E1]" 
                children="Трейлер" 
                onClick={() => handleOpen()} 
              />
              {movieId === undefined && <Buttons 
                type="button" 
                className="text-lg py-4 px-[48px] bg-btnCustom rounded-[28px] text-white hover-never:bg-[#747474] hover-never:text-[#FFFFFF80] focus-visible:bg-[#FFFFFF] focus:text-[#000]" 
                children="О фильме" 
                onClick={() => window.location.href = `/movie/${movie.id}`} 
              />} 
              <Buttons 
                type="button" 
                className="group text-lg py-4 px-[22px] bg-btnCustom rounded-[28px] text-white hover-never:bg-[#747474] hover-never:text-[#FFFFFF80] focus-visible:bg-[#FFFFFF]" 
                children={likeSVG({classname: `flex ${likeStyle} group-hover-never:fill-[#FFFFFF80] group-focus-visible:fill-[#000000]`})}   
                onClick={() => profile?.email !== "None" ? handleClick() : handleOpenModal() } 
              />
              {movieId === undefined && <Buttons 
                type="button" 
                className="group text-lg py-4 px-[22px] bg-btnCustom rounded-[28px] text-white hover-never:bg-[#747474] hover-never:text-[#FFFFFF80] focus-visible:bg-[#FFFFFF]" 
                children={reloadSVG({fill: 'white', classname: 'flex fill-[#FFF] group-hover-never:fill-[#FFFFFF80] group-focus-visible:fill-[#000000]'})}   
                onClick={() => fetchMovieRandom()}
              />}
            </div>
          </div>
          
          <ShowModal type='film' trailerYouTubeId={movie.trailerYouTubeId} isOpen={open} onClose={handleClose} />
          <ShowModal type='auth' isOpen={openModel} onClose={handleCloseModal} />
        </>
        : store.getState().fetchMovieIdReducer.error ? 
          <Error error={store.getState().fetchMovieIdReducer.error} />
          : store.getState().fetchMovieRandomReducer.error ? 
          <Error error={store.getState().fetchMovieRandomReducer.error} />
          : <LoadAnimBlock />} 
    </div>
  );
};

export default MovieRandom
