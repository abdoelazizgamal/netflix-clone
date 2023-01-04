import { useLocation, useNavigate } from "react-router-dom";

const Geners = ({ geners }) => {
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  const handleGeners = (id) => {
    if (location.pathname.includes("/movie/"))
      navigate(`/movie/category/${id}`);
    else navigate(`/tv/category/${id}`);
    // const res = await instance.get(Requests.fetchGenres(id));
  };
  return (
    <div className="geners">
      {geners?.length === 0 && "There is no geners"}
      {geners?.map((gen) => (
        <button key={gen?.id} onClick={() => handleGeners(gen?.id)}>
          <span>👉</span> {gen?.name}
        </button>
      ))}
    </div>
  );
};

export default Geners;
