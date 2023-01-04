import { useCallback, useState } from "react";
import instance from "../axios";

const useAxios = () => {
  const [data, setData] = useState([]);
  const [error, setErorr] = useState(null);
  const [loading, setLoading] = useState(false);
  const doFetch = useCallback(async (fetchUrl, ...args) => {
    setLoading(true);
    try {
      let res;
      if (args.length > 0) {
        console.log(fetchUrl(...args));
        res = await instance.get(fetchUrl(...args));
      } else {
        res = await instance.get(fetchUrl);
      }
      // console.log(res, "res");
      setData(res.data);
    } catch (error) {
      setErorr(error.message);
    }
    setLoading(false);
  }, []);

  return { data, loading, error, doFetch };
};

export default useAxios;
