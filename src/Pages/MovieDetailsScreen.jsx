import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../axios";
import MovieDetails from "../components/MovieDetails";
import NavBar from "../components/NavBar";
import Recommendition from "../components/Recommendition";
import Requests from "../Requests";
import "../style/MovieDetails.css";
const MovieDetailsScreen = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await instance.get(Requests.fetchMovie(id));
      setMovie(response.data);
      // console.log(response.data);
      return response;
    };
    if (id) fetchMovie(id);
  }, [id]);
  return (
    <>
      <NavBar />
      <MovieDetails movie={movie} />
      <Recommendition id={movie?.id} />
    </>
  );
};

export default MovieDetailsScreen;
