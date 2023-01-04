import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useAxios from "../hooks/useAxios";
import Requests from "../Requests";

const CategoryTitle = () => {
  const { type, id } = useParams();
  const { data, doFetch: fetchMoviesGenresList } = useAxios();
  console.log(data);
  useEffect(() => {
    if (type === "movie") fetchMoviesGenresList(Requests.fetchGenersList);
    else fetchMoviesGenresList(Requests.fetchGenersTvList);
  }, [type, id, fetchMoviesGenresList]);
  const gener = data?.genres?.filter((gen) => gen.id === Number(id));
  return <div className="category-title container">{gener?.[0]?.name}</div>;
};

export default CategoryTitle;
