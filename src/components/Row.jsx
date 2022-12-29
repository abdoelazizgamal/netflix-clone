import { useEffect, useState } from "react";
import instance from "../axios";
import Requests from "../Requests";
import "../style/Row.css";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const base_url = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [details, setDetails] = useState(null);

  const [sliderRef] = useKeenSlider({
    initial: 0,
    breakpoints: {
      "(min-width: 996px)": {
        slides: {
          perView: 7,
          spacing: 15,
        },
      },
      "(max-width: 996px)": {
        slides: {
          perView: 4,
          spacing: 15,
        },
      },
    },
    loop: true,
    detailsChanged(s) {
      setDetails(s.track.details);
    },
    // created() {
    //   console.log("slide created");
    // },
  });

  function scaleStyle(idx) {
    if (!details) return {};
    const slide = details.slides[idx];
    const scale_size = 0.7;
    const scale = 1 - (scale_size - scale_size * slide.portion);
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    };
  }
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await instance.get(Requests.fetchNetflixOriginals);
      setMovies(response.data.results);
      return response;
    };
    fetchMovies();
  }, []);

  //   console.log(movies);
  return (
    <div className="row container">
      <h2>{title}</h2>

      <div ref={sliderRef} className="keen-slider zoom-out row__posters">
        {movies?.map((movie, index) => (
          <div key={movie?.id} className="keen-slider__slide  zoom-out__slide">
            <div style={scaleStyle(index)}>
              <img
                className={`row__poster ${isLargeRow && "row__poster__large"}`}
                src={
                  movie.poster_path && movie?.backdrop_path
                    ? `${base_url}${
                        isLargeRow ? movie?.poster_path : movie?.backdrop_path
                      }`
                    : "https://www.telkomsel.com/sites/default/files/product_banner_image/netflix-right-LANDING.png"
                }
                alt={movie?.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
