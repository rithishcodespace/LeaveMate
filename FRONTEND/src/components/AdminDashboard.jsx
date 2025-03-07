import { useEffect } from "react";
import {useState} from "react"
import axios from "axios";
import { logout } from "../utils/loggedinslice";
import {useDispatch,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

let AdminDashboard = () =>{

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((store)=>store.userSlice)
  // const[pending,setpending] = useState();

  const [leaveRequests,setleaveRequest] = useState([]);
  useEffect(()=>{
   function fetchData()
   {
     axios.get("http://localhost:5000/fetchpending")
     .then((response)=>{
      if(response.status == 200)
      {
        setleaveRequest(response.data);
      }
      else
      {
        console.log("There is an problem in fetching leave requests");
      }
     })
    
  }
  fetchData();
  },[])

  function acceptapplication(id)
  {
    axios.patch(`http://localhost:5000/acceptapplication/${id}`,{
      headers:{"Content-type":"applications/json"}
    })
    .then((response)=>{
      if(response.status == 200)
      {
        alert("application accepted!")
      }
      else
      {
        console.log("There is a problem in accepting the application")
      }
    })

    // axios.post("http://localhost:5000/notify",)
  }

  function rejectapplication(id)
  {
    axios.patch(`http://localhost:5000/rejectapplication/${id}`,{
      headers:{"Content-type":"applications/json"}
    })
    .then((response)=>{
      if(response.status == 200)
      {
        alert("application rejected!")
      }
      else
      {
        console.log("There is a problem in accepting the application");
      }
    })
  }

  function handleLogout()
  {
    dispatch(logout());
    navigate("/login");
  }

  return(
    <div className="bg-black flex justify-center h-screen overflow-auto">
      <button className="text-blue-600 font-sans font-bold absolute top-5 right-[1430px] cursor-pointer">ADMIN DASHBOARD</button>
       <button className="p-2 bg-blue-600 text-black font-serif absolute top-5 left-[1430px] rounded-lg cursor-pointer hover:bg-blue-900" onClick={handleLogout}>Logout</button>
      <div className="mt-8">
         {leaveRequests &&<p className="font-mono text-3xl text-blue-600 relative left-68 mb-6">Leave Requests</p>}
         {leaveRequests && leaveRequests.map((request,index)=>(
           <div key={index} className="h-auto w-[800px] bg-slate-900 hover:scale-105 duration-300 shadow-sm shadow-blue-600 rounded-md m-5">
           <p className="p-2 text-white min-w-[100px]">{selector.name}</p>
           <p className="p-2 text-white min-w-[150px]">{selector.emailId}</p>
           <div className="p-2 text-white">
             <p>📅 {request.fromdate} to {request.todate}</p>
           </div>
           <p className="p-2 text-white w-32 sm:w-44 lg:w-52 truncate whitespace-normal break-words">
             {request.reason}
           </p>
           <div className="flex space-x-2">
             <button className="text-white bg-green-500 p-2 cursor-pointer hover:bg-green-700 rounded-lg" onClick={()=>{
              acceptapplication(request.id);
              fetchData();
              }}>Accept</button>
             <button className="text-white bg-red-600 p-1.5 w-16 rounded-lg hover:bg-red-700 cursor-pointer" onClick={()=>{
              rejectapplication(request.id)
              fetchData();
              }}>Reject</button>
           </div>
         </div>         
         ))
         
         }
      </div>
    </div>
  )
}

export default AdminDashboard;