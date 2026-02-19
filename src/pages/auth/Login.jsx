import React, { useState } from "react";
import Button from "../../component/common/Button";
import { Link, useNavigate } from "react-router";
import app from "../../firebase/firebase.confg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const auth = getAuth(app);
  const navigate = useNavigate()

  const handaleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Login succesfull")
         navigate("/Dashbord")
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterror(errorMessage);
      });
  };

  return (
    <>
      <section className="w-full h-screen flex justify-center items-center bg-[#f8f9fa]">
        <div className="max-w-md  w-full bg-white rounded-2xl p-8 shadow-sm border border-gray-100   ">
          <div className=" text-center mb-10">
            <div className="flex justify-center mb-4">
              <div className="bg-[#1B4332] p-5 rounded-2xl text-white font-bold text-4xl">
                D
              </div>
            </div>
            <h2 className=" font-bold text-2xl">Wellcome! Denzo</h2>
            <p>Login to your account</p>
          </div>

          <form onSubmit={handaleLogin} className=" space-y-6">
            <div>
              <label className="text-sm text-gray-800 font-bold block mb-2">
                Email
              </label>
              <div>
                <input
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  type="email"
                  placeholder="email@example.com"
                  className="w-full rounded-full border border-gray-200 focus:ring-2 focus:ring-[#1B4332] outline-none focus:border-transparent transition pl-10 pr-4 py-2 "
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-800 font-bold block mb-2">
                Password
              </label>
              <div>
                <input
                  value={password}
                  onChange = {(e) => setpassword(e.target.value)}
                  type="Password"
                  placeholder="********"
                  className="w-full rounded-full border border-gray-200 focus:ring-2 focus:ring-[#1B4332] outline-none focus:border-transparent transition pl-10 pr-4 py-2 "
                />

              </div>
            </div>
             {error && (
            <p className=" text-sm text-red-500 italic">
             invalid email or password
            </p>
          )}

            <button
              type="submit"
              className=" flex w-full font-semibold text-xl text-white rounded-full  justify-center items-center px-4 py-2 bg-[#1B4332]"
            >
              Login
            </button>
          </form>
         
          <div className=" text-center mt-4 ">
            <p className=" text-sm text-gray-700">Don't have a Account</p>
            <Link to="/Register" className="font-semibold text-[#1B4332]">
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
