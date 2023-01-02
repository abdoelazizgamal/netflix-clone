import { base_url } from "../Constant";
import Actors from "./Actors";
import Geners from "./Geners";

const MovieDetails = ({ movie }) => {
  const ImageLink = movie?.poster_path
    ? `${base_url}${movie?.poster_path}`
    : "https://mundowin.com/wp-content/uploads/2020/05/Netflix-download-errors.jpg";

  const starsValue = "".padStart(Math.round(movie?.vote_average) * 2, "🌟");
  const date = new Date(movie?.release_date).toLocaleDateString();
  return (
    <div className="movie-details container">
      <div className="img-details">
        <img src={ImageLink} alt="" />
      </div>
      <div className="movie-info">
        <h3 className="movie-details-title">
          {movie?.original_title || movie?.title}
        </h3>
        <p className="movie-title-des">{movie?.overview}</p>
        <div className="voting">
          <div>
            <b>{Math.round(movie?.vote_average)} / 10</b>
            <span>{starsValue}</span>
          </div>
          <div>
            <b>Vote Count </b>
            <span>{movie?.vote_count}👨‍💻</span>
          </div>
        </div>
        <div>
          <div>
            <b>Duration</b>
            <span> {movie?.runtime}min</span>
          </div>
          <div>
            <b>Release Date</b>
            <span>{date !== "Invalid Date" ? date : null}</span>
          </div>
        </div>
        <Geners geners={movie?.genres} />

        <Actors actors={movie?.credits?.cast} />
      </div>
    </div>
  );
};

export default MovieDetails;
