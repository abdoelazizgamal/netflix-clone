const API_KEY = "897bdaa83524906e271309e1dccab4ad";
const Requests = {
  search: (term, page) =>
    `/search/multi?api_key=${API_KEY}&query=${term}&page=${page}&language=en-US`,
  fetchPopular: `movie/popular?&api_key=${API_KEY}`,
  fetchPopularTv: `tv/popular?&api_key=${API_KEY}`,
  fetchTopRated: `movie/top_rated?&api_key=${API_KEY}`,
  fetchTopRatedTvSeasons: `/tv/top_rated?api_key=${API_KEY}`,
  fetchUpcoming: `movie/upcoming?&api_key=${API_KEY}`,
  fetchGenres: (
    id,
    page
  ) => `/discover/movie?with_genres=${id}&page=${page}&api_key=${API_KEY}
  `,
  fetchTvGenres: (
    id,
    page
  ) => `/discover/tv?with_genres=${id}}&page=${page}&api_key=${API_KEY}
  `,
  fetchMovie: (id) =>
    `/movie/${id}?append_to_response=videos,credits&api_key=${API_KEY}`,
  fetchTv: (id) =>
    `/tv/${id}?append_to_response=videos,credits&api_key=${API_KEY}`,
  fetchActor: (id) => `/person/${id}?api_key=${API_KEY}`,
  fetchActorFilms: (cast_id) =>
    `/discover/movie?with_cast=${cast_id}&api_key=${API_KEY}`,
  // fetchActorTvShows: (cast_id) =>
  //   `/discover/tv?with_cast=${cast_id}&api_key=${API_KEY}`,
  fetchActorTvShows: (cast_id) =>
    `/person/${cast_id}/tv_credits?api_key=${API_KEY}&language=en-US`,
  // fetchActorTvShows: (cast_id) =>
  //   `/tv/${cast_id}/credits?api_key=${API_KEY}&language=en-US`,

  fetchFilmRecommenditin: (film_id) =>
    `/movie/${film_id}/recommendations?api_key=${API_KEY}`,
  fetchTvRecommenditin: (tv_id) =>
    `/tv/${tv_id}/recommendations?api_key=${API_KEY}`,
  fetchGenersList: `/genre/movie/list?api_key=${API_KEY}&language=en-US
  `,
  fetchGenersTvList: `/genre/tv/list?api_key=${API_KEY}&language=en-US`,

  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
  // fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default Requests;
