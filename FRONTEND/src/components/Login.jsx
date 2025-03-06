import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "../utils/loggedinslice";

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
              alert(`logedIn successfully as ${responsedata.data.role}`)
              navigate(responsedata.data.role === "student" ? "/dashboard" : "/admin");
            }
            else
            {
                console.log("role not found")
            }
        })
    }
    return(
       
        <div className="flex justify-center items-center bg-gradient-to-r from-black via-gray-800 to-black min-h-screen">
            <div className="flex justify-center items-center bg-slate-800 w-96 flex-col relative h-[350px] rounded-2xl">
                <p className="text-2xl font-mono absolute top-5 text-white">Login</p>
                <input ref={usernameRef} type="text" placeholder="  Username" className="bg-gray-700 text-white px-4 py-2 rounded-md w-64 m-2 h-10 outline-none focus:ring-2 focus:ring-purple-500 relative bottom-4 placeholder:text-black"/>
                <input ref={emailRef} type="text" placeholder="  EmailId" className="bg-gray-700 text-white px-4 py-2 rounded-md w-64 m-2 h-10 outline-none focus:ring-2 focus:ring-purple-500 relative bottom-4 placeholder:text-black"/>
                <input ref={passRef} type="text" placeholder="  Password" className="bg-gray-700 text-white px-4 py-2 rounded-md w-64 m-2 h-10 outline-none focus:ring-2 focus:ring-purple-500 relative bottom-4 placeholder:text-black"/>
                <button className=" bg-purple-500  hover:bg-purple-600 transition-all duration-200 w-64 h-10 rounded-md relative top-5 cursor-pointer" onClick={handleLogin}>login</button>
            </div>
        </div>
        
    )
}

export default Login;