import { useEffect } from "react";
import HomeScreen from "./Pages/HomeScreen";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "keen-slider/keen-slider.min.css";
import LoginScreen from "./Pages/LoginScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login, logout, useUserSelector } from "./app/slices/userSlice";
import "./style/App.css";
import ProfileScreen from "./Pages/ProfileScreen";
import MovieDetailsScreen from "./Pages/MovieDetailsScreen";
import ActorDetailsScreen from "./Pages/ActorDetailsScreen";
import Category from "./Pages/Category";
import SearchPage from "./Pages/SearchPage";
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useUserSelector();
  const { pathname } = useLocation();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [navigate, dispatch]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="app">
      <ToastContainer />
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/movie/:id" element={<MovieDetailsScreen />} />
          <Route path="/tv/:id" element={<MovieDetailsScreen />} />
          <Route path="/actor/:id" element={<ActorDetailsScreen />} />
          <Route path="/:type/category/:id" element={<Category />} />
          <Route path="/search/:term" element={<SearchPage />} />
          {/* <Route path="/*" element={<Navigate to="/" />} /> */}
        </Routes>
      )}
    </div>
  );
}

export default App;
