import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { base_url } from "../Constant";
import { useNavigate, useParams } from "react-router-dom";

const animation = { duration: 10000, easing: (t) => t };
const ActorMovies = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [optionsConfig, setOptionsConfig] = useState({});
  const [sliderRef] = useKeenSlider(optionsConfig);
  useEffect(() => {
    const SET_ID = setTimeout(() => {
      setOptionsConfig({
        loop: true,
        initial: 0,
        breakpoints: {
          "(max-width: 776px)": {
            slides: {
              perView: 2,
              spacing: 15,
            },
          },
          "(min-width: 776px)": {
            slides: {
              perView: 4,
              spacing: 15,
            },
          },
          "(min-width: 1200px)": {
            slides: {
              perView: 6,
              spacing: 15,
            },
          },
        },
        renderMode: "performance",
        drag: true,
        created(s) {
          s.moveToIdx(1, true, animation);
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 1, true, animation);
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 1, true, animation);
        },
      });
    }, 1000);
    return () => {
      setOptionsConfig({});
      clearTimeout(SET_ID);
    };
  }, [id]);
  const handleNav = (id) => {
    navigate(`/movie/${id}`);
  };
  return (
    <div className="container actor-movies">
      <div ref={sliderRef} className="keen-slider">
        {movies?.map((movie) => (
          <div
            className="keen-slider__slide number-slide"
            key={movie?.id}
            onClick={() => handleNav(movie?.id)}
          >
            <img
              // className={`row__poster ${!loaded && "hidden"}`}
              className={`row__poster`}
              src={
                movie.poster_path
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
