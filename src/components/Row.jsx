import { useEffect, useState } from "react";
import instance from "../axios";

import "../style/Row.css";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useNavigate } from "react-router-dom";
import { base_url } from "../Constant";
// import Loader from "./Loader";

const Row = ({ title, fetchUrl, isLargeRow = false, tv = false }) => {
  const [movies, setMovies] = useState([]);
  // const [loaded, setLoaded] = useState(false);
  const [details, setDetails] = useState(null);
  const [options, setOptions] = useState({});
  const [sliderRef] = useKeenSlider(options);
  const navigate = useNavigate();
  function scaleStyle(idx) {
    if (!details) return {};
    const slide = details.slides[idx];
    const scale_size = 0.7;
    const scale = 1 - (scale_size - scale_size * slide?.portion);
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    };
  }
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await instance.get(fetchUrl);

      setMovies(response.data.results);
      setOptions({
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
        loop: true,
        detailsChanged(s) {
          setDetails(s.track.details);
        },
      });

      return response;
    };
    fetchMovies();
    return () => {
      setOptions({});
    };
  }, [fetchUrl]);

  const handleNaV = (id) => {
    if (tv) navigate(`/tv/${id}`);
    else {
      navigate(`/movie/${id}`);
    }
  };

  return (
    <div className="row container">
      <h2>{title}</h2>

      <div
        ref={sliderRef}
        className={`keen-slider zoom-out row__posters ${
          isLargeRow && "row__poster__large"
        }`}
      >
        {movies?.map((movie, index) => (
          <div
            key={movie?.id}
            className="keen-slider__slide  zoom-out__slide"
            onClick={() => handleNaV(movie?.id)}
          >
            <div className="movie-name">
              <h5>
                {movie?.title ||
                  movie?.original_title ||
                  movie?.name ||
                  movie?.original_name}{" "}
              </h5>
            </div>
            <div style={scaleStyle(index)}>
              {/* {loaded ? null : <Loader />} */}
              <img
                // className={`row__poster ${!loaded && "hidden"}`}
                className={`row__poster`}
                src={
                  movie.poster_path && movie?.backdrop_path
                    ? `${base_url}${
                        isLargeRow ? movie?.poster_path : movie?.backdrop_path
                      }`
                    : "https://www.telkomsel.com/sites/default/files/product_banner_image/netflix-right-LANDING.png"
                }
                alt={movie?.title}
                // onLoad={() => setLoaded(true)}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
