import { useNavigate, useParams } from "react-router-dom";
import { base_url, DefaultImage } from "../Constant";

const Card = ({ item, tv }) => {
  let imageLink;
  if (item?.poster_path) {
    imageLink = `${base_url}${item?.poster_path}`;
  } else {
    imageLink = DefaultImage;
  }
  const starsValue = "".padStart(Math.round(item?.vote_average) * 2, "🌟");
  const { type } = useParams();
  const navigate = useNavigate();
  const handleNav = () => {
    if (type === "movie" || tv === false) {
      navigate(`/movie/${item?.id}`);
    } else {
      navigate(`/tv/${item?.id}`);
    }
  };
  return (
    <div className="card" onClick={handleNav}>
      <img src={imageLink} alt="" loading="lazy" />
      <h4>
        {item?.original_title ||
          item?.title ||
          item?.original_name ||
          item?.name}
      </h4>
      <p>{starsValue}</p>
    </div>
  );
};

export default Card;
