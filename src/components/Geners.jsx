import React from "react";
import instance from "../axios";
import Requests from "../Requests";

const Geners = ({ geners }) => {
  const handleGeners = async (id) => {
    const res = await instance.get(Requests.fetchGenres(id));
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
