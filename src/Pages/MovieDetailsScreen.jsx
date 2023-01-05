import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  Loader,
  NavBar,
  MovieDetails,
  Recommendition,
  TrailerModal,
  Error,
} from "../components/.";
import useAxios from "../hooks/useAxios";
import Requests from "../Requests";
import "../style/MovieDetails.css";
const MovieDetailsScreen = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const {
    data: movie,
    loading: moviesIsLoading,
    error: errorOfMovie,
    doFetch: FetchMovieDetails,
  } = useAxios();
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (id) {
      if (pathname.includes("/tv/")) FetchMovieDetails(Requests.fetchTv(id));
      else FetchMovieDetails(Requests.fetchMovie(id));
    }
  }, [id, pathname, FetchMovieDetails]);

  return (
    <>
      {moviesIsLoading && <Loader />}
      <NavBar />
      {errorOfMovie ? (
        <Error error={errorOfMovie} style={{ marginTop: "70px" }} />
      ) : (
        <>
          <MovieDetails movie={movie} setIsOpen={setIsOpen} />
          <Recommendition id={movie?.id} />
          <TrailerModal
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            movie={movie}
          />
        </>
      )}
    </>
  );
};

export default MovieDetailsScreen;
