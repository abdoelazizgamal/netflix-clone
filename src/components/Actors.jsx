import React from "react";
import { useNavigate } from "react-router-dom";

import { AvatarImg, base_url } from "../Constant";

const Actors = ({ actors }) => {
  const navigate = useNavigate();
  const handleActorNav = (id) => {
    navigate(`/actor/${id}`);
  };
  const imgUrl = AvatarImg;
  return (
    <>
      <div className="actors">
        <h4>Actors</h4>
        {actors?.slice(0, 10)?.map((actor) => (
          <div
            className="actor"
            key={actor?.id}
            onClick={() => handleActorNav(actor?.id)}
          >
            <img
              src={`${
                actor?.profile_path
                  ? `${base_url}${actor?.profile_path}`
                  : imgUrl
              } `}
              alt=""
            />
            <h5>{actor?.name || actor?.original_name}</h5>
            <h6 className="text-light">{actor?.character}</h6>
          </div>
        ))}
      </div>
    </>
  );
};

export default Actors;
