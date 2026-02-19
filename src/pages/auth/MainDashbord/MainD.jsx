import { getAuth, signOut } from "firebase/auth";
import app from "../../../firebase/firebase.confg";

import { useNavigate } from "react-router";
import { useAuth } from "../../../Context/AuthProvider";

function MainD() {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const {curentrUser}= useAuth()

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };



  return (
    <div>
      <p>{curentrUser.uid}</p>
      <button
        onClick={handleLogOut}
        className=" flex  font-semibold text-xl text-white rounded-full  justify-center items-center px-4 py-2 bg-[#1B4332]"
      >
        Logout
      </button>
    </div>
  );
}

export default MainD;
