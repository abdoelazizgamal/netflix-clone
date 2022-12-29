import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import Row from "../components/Row";
import Requests from "../Requests";
import "../style/HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* NavBar */}
      <NavBar />

      {/* Banner */}
      <Banner />
      {/* Row */}
      <Row
        title="NETFLIX  ORIGINALS"
        fetchUrl={Requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={Requests.fetchTrending} isLargeRow />
      <Row title="TOP  RATED" fetchUrl={Requests.fetchTopRated} isLargeRow />
      <Row title="ACTION MOVIES" fetchUrl={Requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={Requests.fetchRomanceMovies} />
      <Row
        title="DOCUMENTARIES MOVIES"
        fetchUrl={Requests.fetchDocumentaries}
      />
    </div>
  );
};

export default HomeScreen;
