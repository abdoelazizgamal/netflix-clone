import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader, NavBar, ActorDetails, ActorMovies } from "../components/.";
import { notifyErorr } from "../helpers/Toast";
import useAxios from "../hooks/useAxios";
import Requests from "../Requests";
import "../style/MovieDetails.css";
const ActorDetailsScreen = () => {
  const { id } = useParams();
  const {
    data: actor,
    loading: isActorLoading,
    error: errorActor,
    doFetch: GetActor,
  } = useAxios();

  useEffect(() => {
    if (id) {
      GetActor(Requests.fetchActor(id));
    }
  }, [id, GetActor]);
  if (errorActor) notifyErorr(errorActor);
  return (
    <>
      <NavBar />
      {!isActorLoading ? (
        <>
          <ActorDetails actor={actor} />
          <ActorMovies
            fetchUrl={Requests.fetchActorFilms(id)}
            name={actor?.name}
          />
          <ActorMovies
            tv
            fetchUrl={Requests.fetchActorTvShows(id)}
            name={actor?.name}
          />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ActorDetailsScreen;
