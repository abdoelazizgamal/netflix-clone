import React from "react";
import Requests from "../Requests";
import Loader from "./Loader";
import Row from "./Row";

const Recommendition = ({ id }) => {
  if (!id) {
    return <Loader />;
  }
  return (
    <div className="recommend container">
      <Row
        title="You might also like"
        fetchUrl={Requests.fetchRecommenditin(id)}
        isLargeRow
      />
    </div>
  );
};

export default Recommendition;
