import { use, useState } from "react";
import { Link,  useNavigate } from "react-router";
import { Lock, Mail, User } from "lucide-react";
import app from "../../firebase/firebase.confg";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const auth = getAuth(app);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  
  const navigate = useNavigate()
  const handaleRegister = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        navigate("/login")

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
       
        

        // ..
      });

   
    setemail("");
    setpassword("");
  };

  return (
    <div>
      <section className="w-full h-screen flex justify-center items-center bg-[#f8f9fa]">
        <div className="max-w-md  w-full bg-white rounded-2xl p-8 shadow-sm border border-gray-100   ">
          <div className=" text-left mb-10">
            <h2 className=" font-bold text-2xl">
              Create Your New <br /> Account{" "}
            </h2>
            <p>Start your task managment journey</p>
          </div>

          <form onSubmit={handaleRegister} className=" space-y-6">
            <div>
              <label className="text-sm text-gray-800 font-bold block mb-2">
                Email
              </label>
              <div className=" relative">
                <Mail className=" absolute top-3 left-3 size-5 text-gray-400" />
                <input
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
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
              <div className=" relative">
                <Lock className=" absolute top-3 left-3 size-5 text-gray-400" />
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  type="Password"
                  placeholder="000000"
                  className="w-full rounded-full border border-gray-200 focus:ring-2 focus:ring-[#1B4332] outline-none focus:border-transparent transition pl-10 pr-4 py-2 "
                />
              </div>
            </div>
           

            <button
              type="submit"
              className=" flex w-full font-semibold text-xl text-white rounded-full  justify-center items-center px-4 py-2 bg-[#1B4332]"
            >
              Register Now
            </button>
          </form>

          <div className=" text-center mt-4 ">
            <p className=" text-sm text-gray-700"> Have a Account</p>
            <Link to="/Login" className="font-semibold text-[#1B4332]">
              Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
