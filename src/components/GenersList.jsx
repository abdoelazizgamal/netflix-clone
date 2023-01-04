import { useNavigate } from "react-router-dom";

const GenersList = ({ list, title }) => {
  const navigate = useNavigate();
  const handleGeners = (id) => {
    if (title === "Film's Categories") {
      navigate(`/movie/category/${id}`);
    } else {
      navigate(`/tv/category/${id}`);
    }
  };
  return (
    <>
      <h4 className="genres-title">{title}</h4>
      <div className="genres">
        {list?.map((item) => (
          <button key={item?.id} onClick={() => handleGeners(item?.id)}>
            <span>👉</span>
            {item?.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default GenersList;
