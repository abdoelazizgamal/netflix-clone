export const base_url = "https://image.tmdb.org/t/p/original/";
export const ObjectConfig = {
  initial: 0,
  breakpoints: {
    "(max-width: 776px)": {
      slides: {
        perView: 2,
        spacing: 15,
      },
    },
    "(min-width: 776px)": {
      slides: {
        perView: 4,
        spacing: 15,
      },
    },
    "(min-width: 1200px)": {
      slides: {
        perView: 6,
        spacing: 15,
      },
    },
  },
  loop: true,
};
