import { useKeenSlider } from "keen-slider/react";

import { useEffect, useState } from "react";
import { base_url, ObjectConfig } from "../Constant";
import { useNavigate, useParams } from "react-router-dom";
import instance from "../axios";

import Loader from "./Loader";

const animation = { duration: 10000, easing: (t) => t };
const ActorMovies = ({ fetchUrl, name, tv = false }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  const [optionsConfig, setOptionsConfig] = useState({});
  const [sliderRef] = useKeenSlider(optionsConfig);
  useEffect(() => {
    const handleMovies = async (id) => {
      const actorFilms = await instance.get(fetchUrl);

      if (tv) setMovies(actorFilms.data.cast);
      else setMovies(actorFilms.data.results);
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
    };

    if (id) {
      handleMovies(id);
    }
    return () => {
      setOptionsConfig({});
    };
  }, [id, fetchUrl, tv]);
  const handleNav = (id) => {
    if (tv) navigate(`/tv/${id}`);
    else navigate(`/movie/${id}`);
  };
  if (!id) return <Loader />;
  return (
    <div className="container actor-movies">
      <h3 className="actor-movies-title">
        {name}'s {tv ? "TV Shows" : "Movies"}
      </h3>
      <div ref={sliderRef} className="keen-slider">
        {movies?.map((movie, index) => (
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
                  : "https://www.telkomsel.com/sites/default/files/product_banner_image/netflix-right-LANDING.png"
              }
              alt={movie?.title}
              // onLoad={() => setLoaded(true)}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ActorMovies;
