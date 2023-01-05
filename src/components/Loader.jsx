import { HashLoader } from "react-spinners";
const Loader = ({ style }) => {
  return (
    <div className="loader" style={{ ...style }}>
      <HashLoader color="#E50914" size={70} />
    </div>
  );
};

export default Loader;
