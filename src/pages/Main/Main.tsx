
import { useParams } from "react-router-dom";
import MovieRandom from "../../components/MovieRandom";
import MovieRatings from "../../components/MovieRatings";
import SelectedFilm from "../../components/SelectedFilm";


const Main = () => {
  const { movieId } = useParams();
  return (
    <main className="">
      <section className="mx-auto md:container lg:px-0">
        <MovieRandom />
      </section>
      {/* <section className="w-full px-4 lg:px-0"> */}
      <section className="relative md:container md:p-0">
        {movieId ? <SelectedFilm /> : <MovieRatings />}
      </section>
    </main>
  );
};

export default Main;
