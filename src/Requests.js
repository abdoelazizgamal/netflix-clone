const API_KEY = "897bdaa83524906e271309e1dccab4ad";
const Requests = {
  fetchPopular: `movie/popular?&api_key=${API_KEY}`,
  fetchTopRated: `movie/top_rated?&api_key=${API_KEY}`,
  fetchUpcoming: `movie/upcoming?&api_key=${API_KEY}`,
  fetchGenres: (id) => `/discover/movie?with_genres=${id}&api_key=${API_KEY}
  `,
  fetchActor: (id) => `/person/${id}?api_key=${API_KEY}`,
  fetchActorFilms: (cast_id) =>
    `/discover/movie?with_cast=${cast_id}&api_key=${API_KEY}`,
  // https://api.themoviedb.org/3/discover/movie?with_cast=18918&page=1&api_key=732dfe94c237f44327af913ebba97825
  fetchRecommenditin: (film_id) =>
    `movie/${film_id}//recommendations?api_key=${API_KEY}`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
  // fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchMovie: (id) =>
    `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos,credits&api_key=${API_KEY}`,
};
export default Requests;
