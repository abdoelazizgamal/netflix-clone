import { useEffect, useState } from "react";
import Requests from "../Requests";
import "../style/Banner.css";
import instance from "../axios";
import { base_url } from "../Constant";
import Loader from "./Loader";
const Banner = () => {
  const [movie, setMovie] = useState(null);
  const truncate = (str, n) =>
    str.length > n ? str.substr(0, n - 1) + "..." : str;
  useEffect(() => {
    const fetchData = async () => {
      const response = await instance.get(Requests.fetchPopular);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );

      return response;
    };
    fetchData();
  }, []);
  if (!movie) return <Loader />;

  return (
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
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {true && truncate(`${movie?.overview}`, 130)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
