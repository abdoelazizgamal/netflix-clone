import React from "react";
import { useLocation } from "react-router-dom";
import Requests from "../Requests";
import Loader from "./Loader";
import Row from "./Row";

const Recommendition = ({ id }) => {
  const { pathname } = useLocation();

  if (!id) return <Loader />;

  return (
    <div className="recommend container">
      <Row
        title="You might also like"
        fetchUrl={
          pathname.includes("/tv/")
            ? Requests.fetchTvRecommenditin(id)
            : Requests.fetchFilmRecommenditin(id)
        }
        tv={pathname.includes("/tv/")}
        isLargeRow
      />
    </div>
  );
};

export default Recommendition;
