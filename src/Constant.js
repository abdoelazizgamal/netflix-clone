export const base_url = "https://image.tmdb.org/t/p/original/";
export const DefaultImage =
  "https://www.telkomsel.com/sites/default/files/product_banner_image/netflix-right-LANDING.png";
export const DefaultBannerImage =
  "https://sm.ign.com/ign_mear/screenshot/default/netflix-blog-cover_gese.jpg";
export const AvatarImg =
  "https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png";
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
