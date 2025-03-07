import { useEffect } from "react";
import {useState} from "react"
import axios from "axios";
import { logout } from "../utils/loggedinslice";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

let AdminDashboard = () =>{

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [leaveRequests,setleaveRequest] = useState([]);
  useEffect(()=>{
   function fetchData()
   {
    //  axios.get("")
    //  .then((response)=>{
    //   if(response.status == 200)
    //   {
    //     setLeaveRequest(response.data);
    //   }
    //   else
    //   {
    //     console.log("There is an problem in fetching leave requests");
    //   }
    //  })
    setleaveRequest([{
       name:"Rithish",
       department:"computer science and engineering",
       fromdate:"05-11-2025",
       todate:"10-11-2025",
       reason:"home fest",
       status:"accepted"
    }])
  }
  fetchData();
  },[])

  function handleLogout()
  {
    dispatch(logout());
    navigate("/login");
  }

  return(
    <div className="bg-black flex justify-center h-screen">
       <button className="p-2 bg-blue-600 text-black font-serif absolute top-5 left-[1430px] rounded-lg cursor-pointer hover:bg-blue-900" onClick={handleLogout}>Logout</button>
      <div className="mt-8">
         <p className="font-mono text-3xl text-blue-600 relative left-68 mb-6">Leave Requests</p>
         {leaveRequests && leaveRequests.map((request,index)=>(
           <div className="w-full sm:w-[800px] bg-slate-900 shadow-blue-700 shadow-lg rounded-md flex flex-wrap sm:flex-nowrap justify-between items-center overflow-y-auto p-3 min-h-[150px]">
           <p className="p-2 text-white min-w-[100px]">{request.name}</p>
           <p className="p-2 text-white min-w-[150px]">{request.department}</p>
           <div className="p-2 text-white">
             <p>📅 {request.fromdate} to {request.todate}</p>
           </div>
           <p className="p-2 text-white w-32 sm:w-44 lg:w-52 truncate whitespace-normal break-words">
             {request.reason}
           </p>
           <div className="flex space-x-2">
             <button className="text-white bg-green-500 p-2 cursor-pointer hover:bg-green-700 rounded-lg">Accept</button>
             <button className="text-white bg-red-600 p-1.5 w-16 rounded-lg hover:bg-red-700 cursor-pointer">Reject</button>
           </div>
         </div>         
         ))
         
         }
      </div>
    </div>
  )
}

export default AdminDashboard;