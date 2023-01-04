import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../axios";
import { notifyErorr } from "../helpers/Toast";
import Requests from "../Requests";
import "../style/SideBar.css";
import GenersList from "./GenersList";
const SideBar = ({ showSidebar, setShowSidebar }) => {
  const [searchValue, setSearchValue] = useState("");
  const sidebar = useRef();
  const backdrop = useRef();
  const navigate = useNavigate();
  const [FilmsGeneres, setFilmsGeneres] = useState([]);
  const [TvGeneres, setTvGeneres] = useState([]);
  useEffect(() => {
    const fetchGenersList = async () => {
      const FilmsGeneresList = await instance.get(Requests.fetchGenersList);
      const TvGeneresList = await instance.get(Requests.fetchGenersTvList);
      setFilmsGeneres(FilmsGeneresList?.data?.genres);
      setTvGeneres(TvGeneresList?.data?.genres);
    };
    fetchGenersList();
  }, []);
  useEffect(() => {
    if (showSidebar === false) {
      //   return { transform: "translateX(100%)" };
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
          <form onSubmit={handleSubmit} className="search-form">
            <input
              type="text"
              value={searchValue}
              placeholder="Type to search"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
          <GenersList list={FilmsGeneres} title="Film's Categories" />
          <GenersList list={TvGeneres} title="TV Show's Categories" />
        </div>
      </div>
    </>
  );
};

export default SideBar;
