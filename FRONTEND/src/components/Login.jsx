import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "../utils/loggedinslice";
import { addusers } from "../utils/userSlice";

let Login = () =>{

    const dispatch = useDispatch();

    const usernameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef()
    const navigate = useNavigate();
    function handleLogin()
    {
        const username = usernameRef.current.value;
        const emailId = emailRef.current.value;
        const password = passRef.current.value;
        axios.post("http://localhost:5000/auth/login",{username,emailId,password},{
            headers:{"Content-Type":"application/json"}
        })
        .then((response)=>{
            if(!response.status == 200)
            {
                console.log("an error occured while applying leave")
            }
        })

        axios.post("http://localhost:5000/role",{username,emailId,password},{
          headers:{"Content-Type":"application/json"}  
        })
        .then((responsedata)=>{
            if(responsedata.status == 200)
            {
              dispatch(login(responsedata.data.role));
              dispatch(addusers({"name":username,"emailId":emailId}))
              alert(`logedIn successfully as ${responsedata.data.role}`)
              navigate(responsedata.data.role === "student" ? "/dashboard" : "/admin");
            }
            else
            {
                console.log("role not found")
            }
        })
    }
    function handleSignin()
    {
      navigate("/signup");
    }
    return(
        <div className="flex justify-center items-center bg-gradient-to-r from-black via-gray-900 to-black min-h-screen p-4">
          <div className="flex flex-col justify-center items-center bg-gray-800 w-96 p-8 rounded-2xl shadow-lg shadow-gray-700 relative">
            <p className="text-3xl font-semibold text-white mb-6">Login</p>

            <input
            ref={usernameRef}
            type="text"
            placeholder="Username"
            className="bg-gray-700 text-white px-4 py-3 rounded-md w-full mb-3 h-12 outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
            />

            <input
            ref={emailRef}
            type="text"
            placeholder="Email ID"
            className="bg-gray-700 text-white px-4 py-3 rounded-md w-full mb-3 h-12 outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
            />

            <input
            ref={passRef}
            type="text"
            placeholder="Password"
            className="bg-gray-700 text-white px-4 py-3 rounded-md w-full mb-4 h-12 outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
            />

            <button
            className="bg-purple-500 hover:bg-purple-600 transition-all duration-200 w-full h-12 rounded-md text-white text-lg font-medium shadow-md hover:shadow-lg"
            onClick={handleLogin}
            >Login</button>

            <p className="text-gray-400 mt-4 text-sm">
            Are you new to <span className="text-purple-400 font-semibold">LeaveMate</span>?{" "}
            <span className="text-red-500 cursor-pointer hover:underline" onClick={handleSignin}>
             Signup now!
            </span>
            </p>
  </div>
</div>

        
    )
}

export default Login;