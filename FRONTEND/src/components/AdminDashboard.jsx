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
        alert("application accepted!");
        setleaveRequest((prevRequests) =>
          prevRequests.filter((request) => request.id !== id)
        );
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
        alert("application rejected!");
        setleaveRequest((prevRequests) =>
          prevRequests.filter((request) => request.id !== id)
        );
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
      <button className="text-blue-600 font-serif font-bold absolute top-5 right-[1410px] cursor-pointer">ADMIN DASHBOARD</button>
       <button className="p-2 bg-blue-600 text-black font-serif absolute top-5 left-[1430px] rounded-lg cursor-pointer hover:bg-blue-900" onClick={handleLogout}>Logout</button>
      <div className="mt-8">
         {leaveRequests.length!=0 &&<p className="font-mono text-3xl text-blue-600 relative left-68 mb-6">Leave Requests</p>}
         {leaveRequests && leaveRequests.map((request,index)=>(
          <div key={index} className="h-auto w-[800px] bg-slate-900 hover:scale-105 duration-300 shadow-md shadow-blue-600 rounded-lg m-5 p-4 flex flex-wrap items-center gap-3 overflow-hidden">
          {/* User Details */}
          <p className="text-white font-medium min-w-[120px]">{request.name}</p>
          <p className="text-white min-w-[180px] break-all">{request.emailId}</p>
        
          {/* Date Range */}
          <div className="text-white flex items-center">
            <p>📅 {request.fromdate} - {request.todate}</p>
          </div>
        
          {/* Reason (Handles long text properly) */}
          <p className="text-white flex-1 min-w-[200px] w-full sm:w-60 lg:w-72 break-words whitespace-normal bg-gray-800 p-2 rounded-md">
            {request.reason}
          </p>
        
          {/* Buttons */}
          <div className="flex space-x-3">
            <button className="text-white bg-green-500 px-4 py-2 rounded-lg hover:bg-green-700 transition" 
              onClick={() => acceptapplication(request.id)}>
              Accept
            </button>
            <button className="text-white bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition" 
              onClick={() => rejectapplication(request.id)}>
              Reject
            </button>
          </div>
        </div>
            
         ))}
         {
          leaveRequests.length==0 &&
          <div className="flex justify-center items relative top-56">
             <p className="font-light text-4xl text-white">NO PENDING APPLICATIONS FOUND</p>
          </div> 
         }
      </div>
    </div>
  )
}

export default AdminDashboard;