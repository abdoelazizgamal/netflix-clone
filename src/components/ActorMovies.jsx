import { useKeenSlider } from "keen-slider/react";

import { useEffect, useMemo, useState } from "react";
import { base_url, DefaultImage, ObjectConfig } from "../Constant";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { notifyErorr } from "../helpers/Toast";
import { Error, Loader } from "./.";

const animation = { duration: 10000, easing: (t) => t };
const ActorMovies = ({ fetchUrl, name, tv = false }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const [movies, setMovies] = useState([]);
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    doFetch: getMovies,
  } = useAxios();
  const [optionsConfig, setOptionsConfig] = useState({});
  const [sliderRef] = useKeenSlider(optionsConfig);
  const MoviesList = useMemo(() => {
    if (tv) return movies?.cast;
    else return movies?.results;
  }, [movies, tv]);
  useEffect(() => {
    if (id) getMovies(fetchUrl);
    return () => {
      setOptionsConfig({});
    };
  }, [id, fetchUrl, getMovies]);
  useEffect(() => {
    if (MoviesList)
      setOptionsConfig({
        ...ObjectConfig,
        renderMode: "performance",
        drag: true,
        created(s) {
          s.moveToIdx(1, true, animation);
        },
        updated(s) {
          s.moveToIdx(s.track?.details?.abs + 1, true, animation);
        },
        animationEnded(s) {
          s.moveToIdx(s.track?.details?.abs + 1, true, animation);
        },
      });
  }, [MoviesList]);
  const handleNav = (id) => {
    if (tv) navigate(`/tv/${id}`);
    else navigate(`/movie/${id}`);
  };
  if (moviesError) notifyErorr(moviesError);
  return (
    <div
      className="container actor-movies"
      style={{ height: moviesLoading && "350px" }}
    >
      <h3 className="actor-movies-title">
        {name}'s {tv ? "TV Shows" : "Movies"}
      </h3>
      {MoviesList?.length === 0 && (
        <Error title="There is no Smiliar videos " error />
      )}
      {moviesLoading ? (
        <Loader style={{ position: "absolute" }} />
      ) : (
        <div ref={sliderRef} className="keen-slider">
          {MoviesList?.map((movie, index) => (
            <div
              className="keen-slider__slide number-slide"
              key={`${movie?.id}-${index}`}
              onClick={() => handleNav(movie?.id)}
            >
              <img
                // className={`row__poster ${!loaded && "hidden"}`}
                className={`row__poster`}
                src={
                  movie?.poster_path
                    ? `${base_url}${movie?.poster_path}`
                    : DefaultImage
                }
                alt={movie?.title}
                // onLoad={() => setLoaded(true)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ActorMovies;
