import { useState } from "react";
import Button from "../../component/common/Button";
import { Link, useNavigate} from "react-router";


import { Lock, Mail } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/firebase.confg";
import { doc, getDoc } from "firebase/firestore";


function Login() {
  const [from, setFrom] = useState({
    email:"",
    password:""});

    const navigate = useNavigate()
  
 
  const handleLogin = async (e)=>{
   e.preventDefault();
   try {
   const userCredential = await signInWithEmailAndPassword(auth,from.email,from.password)
   const user = userCredential.user
    // navigate("/Dashbord")
   
     
     
    const docRef = doc(db,"users",user.uid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const dataBaseRole = docSnap.data().role
      if (dataBaseRole ==="admin") {
        alert("admin Login succesfully")
         navigate("/AdminDashbord")
        
      }else if (dataBaseRole ==="employee"){
        

        alert("empollye Login succesfully")
         navigate("/empollyeDashbord")

      }else{
        alert("invalid email")
      }
      
      
    }
    
   } catch (error) {
    console.log(error);
    
   }
    
  }
const handlechange= (e)=>{
  const {name,value} = e.target

  
  setFrom({
    ...from,
    [name]:value,
  } )
}


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

          <form onSubmit={handleLogin} className=" space-y-6">
            <div>
              <label className="text-sm text-gray-800 font-bold block mb-2">
                Email
              </label>
              <div className=" relative">
                 <Mail className=" absolute top-3 left-3 size-5 text-gray-400" />
                <input
                  value={from.email}
                  onChange={handlechange}
                  type="email"
                  name="email"
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
                  value={from.password}
                  onChange = {handlechange}
                  type="password"
                  name="password"
                  placeholder="********"
                  className="w-full rounded-full border border-gray-200 focus:ring-2 focus:ring-[#1B4332] outline-none focus:border-transparent transition pl-10 pr-4 py-2 "
                />

              </div>
            </div>
             {/* {error && (
            <p className=" text-sm text-red-500 italic">
             invalid email or password
            </p>
          )} */}

            <Button
            
              type="submit"
              className=" flex w-full font-semibold text-xl text-white rounded-full  justify-center items-center px-4 py-2 bg-[#1B4332]"
            >
              Login
            </Button>
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
