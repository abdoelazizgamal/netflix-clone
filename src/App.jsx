import { useEffect } from "react";
import HomeScreen from "./Pages/HomeScreen";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
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
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useUserSelector();
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
  });
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
          <Route path="/actor/:id" element={<ActorDetailsScreen />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      )}
      {/* {user && <Route path="/" element={<HomeScreen />} />} */}
    </div>
  );
}

export default App;
