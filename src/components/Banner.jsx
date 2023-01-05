import { useEffect, useMemo, useState } from "react";
import Requests from "../Requests";
import "../style/Banner.css";
import { base_url, DefaultBannerImage } from "../Constant";
import { Loader, TrailerModal } from "./";
import { useLocation } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { notifyErorr } from "../helpers/Toast";
const Banner = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const {
    data: movie,
    error: errorMovie,
    doFetch: fetchMovieByID,
  } = useAxios();
  const {
    data: movies,
    error: errorGetMovies,
    doFetch: fetchMovies,
  } = useAxios();
  const truncate = (str, n) =>
    str.length > n ? str.substr(0, n - 1) + "..." : str;

  const randomId = useMemo(
    () =>
      movies?.results?.[Math.floor(Math.random() * movies?.results?.length - 1)]
        ?.id,
    [movies]
  );

  useEffect(() => {
    fetchMovies(Requests.fetchPopular);
  }, [fetchMovies]);
  useEffect(() => {
    if (randomId) fetchMovieByID(Requests.fetchMovie, randomId);
  }, [randomId, fetchMovieByID]);
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  const handleModal = () => setIsOpen(true);
  if (errorMovie || errorGetMovies) {
    notifyErorr("error Fetching Data , Please Reload The Page");
  }
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `url( ${
            movie?.backdrop_path
              ? `${base_url}/${movie?.backdrop_path}`
              : DefaultBannerImage
          })`,
        }}
      >
        {movie?.length === 0 ? (
          <Loader style={{ position: "absolute" }} />
        ) : (
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
              {movie?.overview && truncate(`${movie?.overview}`, 130)}
            </h1>
          </div>
        )}

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
