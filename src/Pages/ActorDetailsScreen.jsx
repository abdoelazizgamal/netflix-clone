import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../axios";

import ActorDetails from "../components/ActorDetails";
import ActorMovies from "../components/ActorMovies";
import Loader from "../components/Loader";

import NavBar from "../components/NavBar";
import Requests from "../Requests";
import "../style/MovieDetails.css";
const ActorDetailsScreen = () => {
  const { id } = useParams();
  const [actor, setActor] = useState(null);

  useEffect(() => {
    const handleActor = async (id) => {
      const actor = await instance.get(Requests.fetchActor(id));
      setActor(actor.data);
    };
    if (id) {
      handleActor(id);
    }
  }, [id]);
  if (!id) return <Loader />;
  return (
    <>
      <NavBar />
      <ActorDetails actor={actor} />
      <ActorMovies fetchUrl={Requests.fetchActorFilms(id)} name={actor?.name} />
      <ActorMovies
        tv
        fetchUrl={Requests.fetchActorTvShows(id)}
        name={actor?.name}
      />
    </>
  );
};

export default ActorDetailsScreen;
