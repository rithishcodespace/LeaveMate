import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../utils/loggedinslice";

let Signup = () =>{

    const dispatch = useDispatch()

    const usernameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const roleRef = useRef();
    const navigate = useNavigate();

    async function handleSignup()
    {
        const username = usernameRef.current.value;
        const emailId = emailRef.current.value;
        const password = passRef.current.value;
        const role = roleRef.current.value;
        axios.post("http://localhost:5000/auth/login",{username,emailId,password},{
            headers:{"Content-Type":"application/json"}
        })
        .then((response)=>{
            if(!response.status == 200)
            {
                console.log("invalid credentials")
            }
        })

        try{
          await axios.post("http://localhost:5000/addUser",{emailId,password,role},{
            headers:{"Content-type":"application/json"}
          }) 
          .then((response)=>{
            if(response.status == 200)
            {
                dispatch(login(role));
                alert("User added successfully!");
                navigate(role === "student" ? "/dashboard" : "/admin");
            }
          })
        }
        catch(error)
        {
           console.error("There is an error in sign up user",error)
           document.getElementById(username).value="";
           document.getElementById(password).value="";
           document.getElementById(emailId).value="";
           document.getElementById(role).value="";
        }
    }

    return(
       
        <div className="flex justify-center items-center bg-gradient-to-r from-black via-gray-900 to-black min-h-screen p-4">
        <div className="flex flex-col justify-center items-center bg-gray-800 w-96 p-8 rounded-2xl shadow-lg shadow-gray-700 relative">
          <p className="text-3xl font-semibold text-white mb-6">Sign up</p>

          <input
          ref={usernameRef}
          type="text"
          id="username"
          placeholder="Username"
          className="bg-gray-700 text-white px-4 py-3 rounded-md w-full mb-3 h-12 outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
          />

          <input
          ref={roleRef}
          type="text"
          id="role"
          placeholder="Role"
          className="bg-gray-700 text-white px-4 py-3 rounded-md w-full mb-4 h-12 outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
          />

          <input
          ref={emailRef}
          type="text"
          id="email"
          placeholder="Email ID"
          className="bg-gray-700 text-white px-4 py-3 rounded-md w-full mb-3 h-12 outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
          />

          <input
          ref={passRef}
          type="password"
          id="password"
          placeholder="Password"
          className="bg-gray-700 text-white px-4 py-3 rounded-md w-full mb-4 h-12 outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
          />

          <button
          className="cursor-pointer bg-purple-500 hover:bg-purple-600 transition-all duration-200 w-full h-12 rounded-md text-white text-lg font-medium shadow-md hover:shadow-lg"
          onClick={handleSignup}
          >Signup</button>
        </div>
    </div>)
}

export default Signup;