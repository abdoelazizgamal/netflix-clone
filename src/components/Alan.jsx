import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAlan = () => {
  const navigate = useNavigate();
  useEffect(() => {
    alanBtn({
      key: "95920e690a7dd50bf2ef823fe016749b2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, query }) => {
        if (command === "search") {
          navigate(`/search/${query}`);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useAlan;
