import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logout, useUserSelector } from "../app/slices/userSlice";
import NavBar from "../components/NavBar";
import { auth } from "../firebase";
import { notifyErorr, notifySuccess } from "../helpers/Toast";
import Avatar from "../images/avatar.jpg";
import "../style/ProfileScreen.css";
const ProfileScreen = () => {
  const user = useUserSelector();
  const dispatch = useDispatch();
  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
        notifySuccess("logged Out");
      })
      .catch((error) => {
        notifyErorr(error.message);
      });
  };
  return (
    <div className="ProfileScreen">
      <NavBar />
      <div className="ProfileScreen__body">
        <h1>Edit Profile</h1>
        <div className="ProfileScreen__info">
          <img src={Avatar} alt="" />
          <div className="ProfileScreen__details">
            <h2>{user?.email}</h2>
            <div className="ProfileScreen__plans">
              <h3>Plans</h3>
              <button className="ProfileScreen__signOut" onClick={logOut}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
