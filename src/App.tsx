import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MovieCard from "./components/MovieCard/movieCard";
import SearchFilter from "./components/SearchFilter/SearchFilter";
import { getMovies } from "./features/movies/movieSlice";
import { useAppDispatch, useAppSelector } from "./hooks/storeHook";

function App() {
  const { darkMode, movies } = useAppSelector((state) => state);
  const [search, setSearch] = useState("");

  //using a custom hook to dispatch action
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

const searchMovie = movies.data?.results.filter(movie=>{
  if(!search.length) return movie;
  if(!movie.title) return;
  return movie.title.toLowerCase().includes(search)
})

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-red-900 dark:text-white min-h-screen px-4 lg:px-12 pb-20">
        <Header />

        <div className="mb-12 flex items-center justify-between">
          <SearchFilter setSearch={setSearch}/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-1">
        {searchMovie &&
          searchMovie.map((movie) => {
            const { id, title, overview, poster_path } = movie;
            return (
              <MovieCard
                key={id}
                title={title}
                overview={overview}
                poster_path={"https://image.tmdb.org/t/p/original"+poster_path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
