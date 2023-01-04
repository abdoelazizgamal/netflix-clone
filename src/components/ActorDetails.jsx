import { base_url } from "../Constant";

const ActorDetails = ({ actor }) => {
  const ImageLink = actor?.profile_path
    ? `${base_url}${actor?.profile_path}`
    : "https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png";

  return (
    <div className="movie-details container">
      <div className="img-details">
        <img src={ImageLink} alt="" />
      </div>
      <div className="movie-info">
        <h3 className="movie-details-title">{actor?.name}</h3>
        {actor?.biography && (
          <p className="movie-title-des">{actor?.biography}</p>
        )}
        <div>
          <div>
            <b>Birthday</b>
            <span>{actor?.birthday}</span>
          </div>
          <div>
            <b>Deathday </b>
            <span>
              {actor?.deathday === null ? "لسه بيسترزق مماتش" : actor?.deathday}
            </span>
          </div>
        </div>
        <div>
          <b>Pleace Of Birth</b>
          <span>{actor?.place_of_birth}</span>
        </div>
      </div>
    </div>
  );
};

export default ActorDetails;
