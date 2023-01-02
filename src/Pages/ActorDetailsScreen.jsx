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
  const [actorFilms, setActorFilms] = useState([]);

  useEffect(() => {
    const handleActorAndFilms = async (id) => {
      const actor = await instance.get(Requests.fetchActor(id));
      const actorFilms = await instance.get(Requests.fetchActorFilms(id));
      setActor(actor.data);
      setActorFilms(actorFilms.data.results);
      // console.log("actor => ", actor.data, "films=>", actorFilms.data.results);
    };
    if (id) {
      handleActorAndFilms(id);
    }
  }, [id]);
  if (!id) return <Loader />;
  return (
    <>
      <NavBar />
      <ActorDetails actor={actor} />
      <ActorMovies movies={actorFilms} />
    </>
  );
};

export default ActorDetailsScreen;
