import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../axios";
import Requests from "../Requests";

const CategoryTitle = () => {
  const [Title, setTitle] = useState(null);
  const { type, id } = useParams();
  useEffect(() => {
    const fetchGeners = async () => {
      let res;
      if (type === "movie") res = await instance.get(Requests.fetchGenersList);
      else res = await instance.get(Requests.fetchGenersTvList);
      const gener = res?.data?.genres?.filter((gen) => gen.id === Number(id));
      setTitle(gener?.[0]?.name);
    };
    fetchGeners();
    return () => {};
  }, [type, id]);
  return (
    <div className="category-title container">
      {Title ? Title : "Loading.."}
    </div>
  );
};

export default CategoryTitle;
