import { useCallback, useState } from "react";

import Loader from "./Loader";
const base_url = "https://image.tmdb.org/t/p/original/";

const ImageLoading = ({
  className,
  alt,
  posterPath,
  backdropPath,
  isLargeBoolean,
}) => {
  const [loaded, setLoaded] = useState(false);

  const sourceImg = useCallback(() => {
    if (posterPath && backdropPath) {
      return `${base_url}${isLargeBoolean ? posterPath : backdropPath}`;
    } else {
      return "https://www.telkomsel.com/sites/default/files/product_banner_image/netflix-right-LANDING.png";
    }
  }, [isLargeBoolean, posterPath, backdropPath]);
  return (
    <div>
      {loaded ? null : <Loader />}
      <img
        style={loaded ? {} : { display: "none" }}
        src={sourceImg()}
        // onLoad={() => setLoaded(true)}
        alt={alt}
        className={className}
      />
    </div>
  );
};
export default ImageLoading;
