import { base_url } from "../Constant";
import Actors from "./Actors";
import Geners from "./Geners";
import playIcon from "../images/play-button-circled.png";
const MovieDetails = ({ movie, setIsOpen }) => {
  const ImageLink = movie?.poster_path
    ? `${base_url}${movie?.poster_path}`
    : "https://mundowin.com/wp-content/uploads/2020/05/Netflix-download-errors.jpg";

  const starsValue = "".padStart(Math.round(movie?.vote_average) * 2, "🌟");
  const date = new Date(movie?.release_date).toLocaleDateString();
  const openModal = () => setIsOpen(true);
  return (
    <div className="movie-details container">
      <div className="img-details">
        <div className="player" onClick={openModal}>
          <img src={playIcon} alt="" />
        </div>
        <img src={ImageLink} alt="" />
      </div>
      <div className="movie-info">
        <h3 className="movie-details-title">
          {movie?.original_title ||
            movie?.title ||
            movie?.name ||
            movie?.original_name}
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

        {date !== "Invalid Date" && (
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
        )}
        {movie?.number_of_episodes && movie?.number_of_seasons && (
          <div>
            <div>
              <b>number of seasons</b>
              <span>{movie?.number_of_seasons}</span>
            </div>
            <div>
              <b>number of episodes</b>
              <span> {movie?.number_of_episodes}</span>
            </div>
          </div>
        )}
        <Geners geners={movie?.genres} />

        <Actors actors={movie?.credits?.cast} />
      </div>
    </div>
  );
};

export default MovieDetails;
