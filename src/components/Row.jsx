import { useEffect, useMemo, useState } from "react";
import "../style/Row.css";
import { useKeenSlider } from "keen-slider/react";
import { useNavigate } from "react-router-dom";
import { base_url, DefaultImage, ObjectConfig } from "../Constant";
import useAxios from "../hooks/useAxios";
import { Loader, Error } from "./.";
import { notifyErorr } from "../helpers/Toast";

const Row = ({ title, fetchUrl, isLargeRow = false, tv = false }) => {
  // const [movies, setMovies] = useState([]);
  const {
    data: movies,
    loading: movieIsLoading,
    error: moviesError,
    doFetch: GETMovies,
  } = useAxios();
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
  const MoviesList = useMemo(() => {
    return movies?.results;
  }, [movies]);
  useEffect(() => {
    GETMovies(fetchUrl);
  }, [fetchUrl, GETMovies]);
  useEffect(() => {
    if (MoviesList) {
      setOptions({
        ...ObjectConfig,
        detailsChanged(s) {
          setDetails(s.track.details);
        },
      });
    }
    return () => {
      setOptions({});
    };
  }, [MoviesList]);
  const handleNaV = (id) => {
    if (tv) navigate(`/tv/${id}`);
    else {
      navigate(`/movie/${id}`);
    }
  };
  if (moviesError) notifyErorr(moviesError);
  return (
    <div
      className="row container"
      style={{ height: movieIsLoading && "350px" }}
    >
      <h2>{title}</h2>
      {MoviesList?.length === 0 && (
        <Error title="There is no Smiliar videos " error />
      )}
      {movieIsLoading ? (
        <Loader style={{ position: "absolute" }} />
      ) : (
        <div
          ref={sliderRef}
          className={`keen-slider zoom-out row__posters ${
            isLargeRow && "row__poster__large"
          }`}
        >
          {MoviesList?.map((movie, index) => (
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
                      : DefaultImage
                  }
                  alt={movie?.title}
                  // onLoad={() => setLoaded(true)}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Row;
