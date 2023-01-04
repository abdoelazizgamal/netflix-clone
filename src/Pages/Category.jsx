import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Requests from "../Requests";
import Pagination from "rc-pagination";
import { JumpNextIcon, JumpPrevIcon, NextIcon, PrevIcon } from "../SVG";
import "../style/Category.css";
import CardsContainer from "./CardsContainer";
import Loader from "../components/Loader";
import CategoryTitle from "../components/CategoryTitle";
import useAxios from "../hooks/useAxios";
import Error from "../components/Error";
const Category = () => {
  const { id, type } = useParams();
  const [page, setPage] = useState(1);
  const {
    data: moviesData,
    loading: moviesIsLoading,
    error: moviesError,
    doFetch: fetchSpecificGenres,
  } = useAxios();
  const handleClick = (page) => setPage(page);
  useEffect(() => {
    if (type === "movie") fetchSpecificGenres(Requests.fetchGenres, id, page);
    else fetchSpecificGenres(Requests.fetchTvGenres, id, page);
  }, [page, id, fetchSpecificGenres, type, moviesData?.total_pages]);
  const pageNumber =
    (moviesData?.total_pages > 500 ? 500 : moviesData?.total_pages) * 10;
  useEffect(() => {
    return () => setPage(1);
  }, [id]);
  if (moviesIsLoading) return <Loader />;
  return (
    <>
      <NavBar />
      <CategoryTitle />
      {moviesError ? (
        <Error error={moviesError} />
      ) : (
        <>
          <CardsContainer data={moviesData?.results} />
          <div className="pagination-category container">
            <Pagination
              total={pageNumber}
              current={page}
              onChange={handleClick}
              prevIcon={PrevIcon}
              nextIcon={NextIcon}
              jumpNextIcon={JumpNextIcon}
              jumpPrevIcon={JumpPrevIcon}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Category;
