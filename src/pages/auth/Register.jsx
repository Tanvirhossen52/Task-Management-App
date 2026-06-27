import { useState } from "react";
import { Link,  useNavigate } from "react-router";
import { Lock, Mail, User, User2 } from "lucide-react";
import { auth, db } from "../../firebase/firebase.confg";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function Register() {
 
  const [formData, setFormData] = useState({
  email: "",
  password: "",
  userName :"",
  role: "employee",
});
    const  navigate = useNavigate()
   
const { email, password, role ,userName} = formData;
 
 
 
  const handaleRegister = async(e) => {
    e.preventDefault();

  try {

  const userCredential = await createUserWithEmailAndPassword(auth, email,password)
  const user = userCredential.user;
  await setDoc(doc(db,"users",user.uid),{
    uid:user.uid,
    email:user.email,
    name:userName,
    role:role,

  })
  
  alert("Register sucesfully")
  navigate("/login")
   
  
  

    
      
  
 } catch (error) {
 
        const errorCode = error.code;
        const errorMessage = error.message;
       console.log(errorMessage);
       
        

       
  
 }
   
      


  };


  function handleChange(e) {
    const {name,value} = e.target
    setFormData({
  ...formData,
  [name]: value,
});
    
  }

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

               {/* Name input section */}
             <div>
              <label className="text-sm text-gray-800 font-bold block mb-2">
               Name
              </label>
              <div className=" relative">
                <User2 className=" absolute top-3 left-3 size-5 text-gray-400" />
                <input
                  onChange={handleChange}
                  value={formData.userName ||""}
                  name="userName"
                  type="text"
                  placeholder="jhon doe"
                  className="w-full rounded-full border border-gray-200 focus:ring-2 focus:ring-[#1B4332] outline-none focus:border-transparent transition pl-10 pr-4 py-2 "
                />
              </div>
            </div>
            {/* Email input section */}
            <div>
              <label className="text-sm text-gray-800 font-bold block mb-2">
                Email
              </label>
              <div className=" relative">
                <Mail className=" absolute top-3 left-3 size-5 text-gray-400" />
                <input
                  onChange={handleChange}
                  value={formData.email||""}
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  className="w-full rounded-full border border-gray-200 focus:ring-2 focus:ring-[#1B4332] outline-none focus:border-transparent transition pl-10 pr-4 py-2 "
                />
              </div>
            </div>

            {/* Password input section */}

            <div>
              <label className="text-sm text-gray-800 font-bold block mb-2">
                Password
              </label>
              <div className=" relative">
                <Lock className=" absolute top-3 left-3 size-5 text-gray-400" />
                <input
                  onChange={handleChange}
                  value={formData.password ||""}
                  name="password"
                  type="password"
                  placeholder="000000"
                  className="w-full rounded-full border border-gray-200 focus:ring-2 focus:ring-[#1B4332] outline-none focus:border-transparent transition pl-10 pr-4 py-2 "
                />
              </div>
            </div>



           
            {/* Emollyee and admin input section */}

             <div>
              <label  className="text-sm text-gray-800 font-bold block mb-2">
                role
              </label>
              <div className=" relative">
               
                <select 
                 className="w-full rounded-full border border-gray-200 focus:ring-2 focus:ring-[#1B4332] outline-none focus:border-transparent transition pl-4 pr-4 py-2 " 
                 name="role" 
                 id="role" 
                 onChange={handleChange}
                 value={formData.role||""}>
                  <option value="employee">Employee</option>
                  <option value="admin">admin</option>
                </select>
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
