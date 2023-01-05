import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar, Loader, CardsContainer, Error } from "../components/.";
import Requests from "../Requests";
import Pagination from "rc-pagination";
import { JumpNextIcon, JumpPrevIcon, NextIcon, PrevIcon } from "../SVG";
import "../style/Category.css";
import useAxios from "../hooks/useAxios";

const SearchPage = () => {
  const { term } = useParams();
  const [page, setPage] = useState(1);
  const {
    data: moviesData,
    loading: moviesIsLoading,
    error: moviesError,
    doFetch: fetchSearch,
  } = useAxios();
  const handleClick = (page) => setPage(page);
  useEffect(() => {
    fetchSearch(Requests.search(term, page));
  }, [term, page, fetchSearch]);
  useEffect(() => {
    return () => setPage(1);
  }, [term]);

  //   console.log(movies, pages, page);
  const pageNumber =
    moviesData?.total_pages > 500 ? 500 : moviesData?.total_pages || 0;

  return (
    <>
      {moviesIsLoading && <Loader />}
      <NavBar />
      {!moviesData?.results?.length > 0 && (
        <Error
          style={{ marginTop: "70px" }}
          error
          title={`There is no Search Result for ${term}`}
        />
      )}
      {moviesError ? (
        <Error error={moviesError} />
      ) : (
        <>
          <CardsContainer
            data={moviesData?.results}
            style={{ marginTop: "70px" }}
          />
          <div className="pagination-category container">
            <Pagination
              total={pageNumber * 10}
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

export default SearchPage;
