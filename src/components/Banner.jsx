import { useEffect, useState } from "react";
import Requests from "../Requests";
import "../style/Banner.css";
import instance from "../axios";
import { base_url } from "../Constant";
import Loader from "./Loader";
import TrailerModal from "./TrailerModal";
import { useLocation } from "react-router-dom";
const Banner = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const [movie, setMovie] = useState(null);
  const truncate = (str, n) =>
    str.length > n ? str.substr(0, n - 1) + "..." : str;
  useEffect(() => {
    const fetchData = async () => {
      const response = await instance.get(Requests.fetchPopular);
      const randomMovie =
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ];
      const movie = await instance.get(Requests.fetchMovie(randomMovie?.id));
      setMovie(movie.data);
      return response;
    };
    fetchData();
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  if (!movie) return <Loader />;
  const handleModal = () => setIsOpen(true);
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `url( ${
            movie?.backdrop_path
              ? `${base_url}/${movie?.backdrop_path}`
              : "https://sm.ign.com/ign_mear/screenshot/default/netflix-blog-cover_gese.jpg"
          })`,
        }}
      >
        <div className="banner__contents container">
          <h1 className="banner__title">
            {movie?.original_title || movie?.title}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button" onClick={handleModal}>
              Play
            </button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">
            {true && truncate(`${movie?.overview}`, 130)}
          </h1>
        </div>
        <div className="banner__fadeBottom" />
      </header>
      <TrailerModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        movie={movie}
      />
    </>
  );
};

export default Banner;
