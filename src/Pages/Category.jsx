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
import CategoryTitle from "../components/CategoryTitle";
const Category = () => {
  const { id, type } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(null);
  //   const [results, setResults] = useState(null);

  const handleClick = (page) => {
    setPage(page);
  };
  useEffect(() => {
    const getMoviesByCategories = async () => {
      let res;
      if (type === "movie") {
        res = await instance.get(Requests.fetchGenres(id, page));
      } else {
        res = await instance.get(Requests.fetchTvGenres(id, page));
      }
      setMovies(res.data.results);
      //   setResults(res.data.total_results);
      setPages(res.data.total_pages);
    };
    getMoviesByCategories();
    return () => {
      setMovies([]);
      setPages(null);
      //   setResults(null);
    };
  }, [id, type, page]);
  // console.log(movies, pages, page);
  const pageNumber = pages > 500 ? 500 : pages;
  if (!(movies.length > 0) || !pages) return <Loader />;
  return (
    <>
      <NavBar />
      <CategoryTitle />
      <CardsContainer data={movies} />
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

export default Category;
