import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../axios";
import NavBar from "../components/NavBar";
import Requests from "../Requests";
import Pagination from "rc-pagination";
import { JumpNextIcon, JumpPrevIcon, NextIcon, PrevIcon } from "../SVG";
import "../style/Category.css";
import CardsContainer from "./CardsContainer";
import Loader from "../components/Loader";
const SearchPage = () => {
  const { term } = useParams();
  //   console.log(term);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(null);
  //   const [results, setResults] = useState(null);

  const handleClick = (page) => {
    setPage(page);
  };
  useEffect(() => {
    const getMoviesByCategories = async () => {
      const res = await instance.get(Requests.search(term, page));
      //   console.log(res);
      setMovies(res.data.results);
      setPages(res.data.total_pages);
    };
    getMoviesByCategories();
    return () => {
      setMovies([]);
      setPages(null);
    };
  }, [term, page]);
  //   console.log(movies, pages, page);
  const pageNumber = pages > 500 ? 500 : pages;
  if (!(movies.length > 0) || !pages) return <Loader />;
  return (
    <>
      <NavBar />
      <CardsContainer data={movies} style={{ marginTop: "70px" }} />
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
  );
};

export default SearchPage;
