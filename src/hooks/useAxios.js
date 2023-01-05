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
        res = await instance.get(fetchUrl(...args));
      } else {
        res = await instance.get(fetchUrl);
      }

      setData(res.data);
    } catch (error) {
      setErorr(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, doFetch };
};

export default useAxios;
