import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import instance from "../axios";
import MovieDetails from "../components/MovieDetails";
import NavBar from "../components/NavBar";
import Recommendition from "../components/Recommendition";
import TrailerModal from "../components/TrailerModal";
import Requests from "../Requests";
import "../style/MovieDetails.css";
const MovieDetailsScreen = () => {
  const [movie, setMovie] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);

  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  useEffect(() => {
    const fetchMovie = async () => {
      if (pathname.includes("/tv/")) {
        const response = await instance.get(Requests.fetchTv(id));
        setMovie(response.data);
        return response;
      }
      const response = await instance.get(Requests.fetchMovie(id));
      setMovie(response.data);
      return response;
    };
    if (id) fetchMovie(id);
  }, [id, pathname]);
  return (
    <>
      <NavBar />
      <MovieDetails movie={movie} setIsOpen={setIsOpen} />
      <Recommendition id={movie?.id} />
      <TrailerModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        movie={movie}
      />
    </>
  );
};

export default MovieDetailsScreen;
