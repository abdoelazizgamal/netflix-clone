import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { notifyErorr } from "../helpers/Toast";
import useAxios from "../hooks/useAxios";
import Requests from "../Requests";
import "../style/SideBar.css";
import GenersList from "./GenersList";
import Error from "./Error";
import FormSearchInput from "./FormSearchInput";
const SideBar = ({ showSidebar, setShowSidebar }) => {
  const [searchValue, setSearchValue] = useState("");
  const sidebar = useRef();
  const backdrop = useRef();
  const navigate = useNavigate();
  const {
    data: moviesGenresList,
    error: errorMoviesGenresList,
    doFetch: fetchMoviesGenresList,
  } = useAxios();
  const {
    data: tvGenresList,
    error: tvErrorGenresList,
    doFetch: fetchTvGenresList,
  } = useAxios();
  // console.log(moviesGenresList, tvGenresList);
  useEffect(() => {
    fetchMoviesGenresList(Requests.fetchGenersList);
    fetchTvGenresList(Requests.fetchGenersTvList);
  }, [fetchMoviesGenresList, fetchTvGenresList]);
  useEffect(() => {
    if (showSidebar === false) {
      backdrop.current.classList.add("hidden");
      sidebar.current.classList.remove("active");
      document.body.classList.remove("overflow-hidden");
    } else {
      backdrop.current.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
      setTimeout(() => {
        sidebar.current.classList.add("active");
      }, 0);
    }
  }, [showSidebar]);
  const handleClick = (e) => {
    setShowSidebar(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      navigate(`/search/${searchValue}`);
    } else notifyErorr("Please Enter Search Term");

    setShowSidebar(false);
  };
  return (
    <>
      <div className={`sidebar-backdrop`} ref={backdrop} onClick={handleClick}>
        <div
          className={`sidebar `}
          ref={sidebar}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="close-modal-btn close-sidebar"
            onClick={handleClick}
          >
            ❌
          </button>
          <FormSearchInput
            handleSubmit={handleSubmit}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

          <GenersList
            setShowSidebar={setShowSidebar}
            list={moviesGenresList?.genres}
            title="Film's Categories"
          />
          <Error error={errorMoviesGenresList} />
          <GenersList
            setShowSidebar={setShowSidebar}
            list={tvGenresList?.genres}
            title="TV Show's Categories"
          />
          <Error error={tvErrorGenresList} />
        </div>
      </div>
    </>
  );
};

export default SideBar;
