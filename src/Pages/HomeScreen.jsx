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
      <Row title="Popular Movies" fetchUrl={Requests.fetchPopular} isLargeRow />
      <Row
        title="Top Rated Movies"
        fetchUrl={Requests.fetchTopRated}
        isLargeRow
      />
      <Row
        title="Upcoming Movies"
        fetchUrl={Requests.fetchUpcoming}
        isLargeRow
      />
      {/* <Row
        title="NETFLIX  ORIGINALS"
        fetchUrl={Requests.fetchNetflixOriginals}
        isLargeRow
      /> */}
      {/* <Row title="TRENDING NOW" fetchUrl={Requests.fetchTrending} />
      <Row title="TOP  RATED" fetchUrl={Requests.fetchTopRated} isLargeRow />
      <Row title="ACTION MOVIES" fetchUrl={Requests.fetchActionMovies} />
      <Row
        title="COMEDY MOVIES"
        fetchUrl={Requests.fetchComedyMovies}
        isLargeRow
      />
      <Row title="HORROR MOVIES" fetchUrl={Requests.fetchHorrorMovies} />
      <Row
        title="ROMANCE MOVIES"
        fetchUrl={Requests.fetchRomanceMovies}
        isLargeRow
      />
      <Row
        title="DOCUMENTARIES MOVIES"
        fetchUrl={Requests.fetchDocumentaries}
      /> */}
    </div>
  );
};

export default HomeScreen;
