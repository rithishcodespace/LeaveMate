import {useState} from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "../utils/loggedinslice";

let Editpage = () =>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();

    const[leavetype,setleavetype] = useState("");
    const[fromdate,setfromdate] = useState("");
    const[fromtime,setfromtime] = useState("");
    const[todate,settodate] = useState("");
    const[totime,settotime] = useState("");
    const[reason,setreason] = useState("");

    function handleClick()
    {
        axios.patch(`http://localhost:5000/edit/${id}`,
          {"leavetype":leavetype,"fromdate":fromdate,"fromtime":fromtime,"todate":todate,"totime":totime,"reason":reason},
          {headers:{"Content-Type":"application/json"}}
        )
        .then((response)=>{
          if(response.status == 200)
          {
            alert("Application updated successfully");
            setTimeout(()=>navigate("/dashboard/pendingrequest"));
          }
          else
          {
            alert("An error occured while updating application details")
          }
        })
    }

    function handleLogout()
    {
      dispatch(logout());
      navigate("/login");
    }

  return(
    <div className="flex justify-center items-center h-screen bg-black text-white max-w-screen">
      <button className="p-2 bg-violet-600 text-black font-serif absolute top-5 left-[1430px] rounded-lg cursor-pointer hover:bg-violet-900" onClick={handleLogout}>Logout</button>
      <button className="absolute top-5 left-6.5 text-black bg-violet-600 rounded-lg p-2 hover:bg-violet-400 cursor-pointer" onClick={()=>navigate("/dashboard/pendingrequest")}>back</button>
        <div className="bg-[#1a1a2e] p-8 rounded-xl shadow-lg w-[500px] mb-8">
          <h2 className="text-xl font-bold text-purple-400 text-center mb-4">
            Edit Application
          </h2>
          
    <table className="w-full mx-auto bg-gray-900 text-purple-400 border border-purple-600 rounded-lg shadow-lg">
        <tbody>
            <tr className="border-b border-purple-600">
                <td className="py-3 px-4 text-left font-semibold">Leave Type</td>
                <td className="py-3 px-4">
                  <select className=" bg-gray-800 h-10 w-80 rounded-md border-purple border-[0.8px]" onChange={(e)=>setleavetype(e.target.value)}>
                    <option>emergencey</option>
                    <option>personal</option>
                    <option>General Permission</option>
                    <option>O.D</option>
                  </select>
                  </td>
            </tr>
            <tr className="border-b border-purple-600">
                <td className="py-3 px-4 text-left font-semibold">From Date</td>
                <td className="py-3 px-4"><input type="date" id="fromdate" className="input-field w-full p-2 border border-purple-500 rounded-lg bg-gray-800 text-white" onChange={(e)=>setfromdate(e.target.value)} /></td>
            </tr>
            <tr className="border-b border-purple-600">
                <td className="py-3 px-4 text-left font-semibold">From Time</td>
                <td className="py-3 px-4"><input type="time" id="fromtime" className="input-field w-full p-2 border border-purple-500 rounded-lg bg-gray-800 text-white" onChange={(e)=>setfromtime(e.target.value)}/></td>
            </tr>
            <tr className="border-b border-purple-600">
                <td className="py-3 px-4 text-left font-semibold">To Date</td>
                <td className="py-3 px-4"><input type="date" id="todate" className="input-field w-full p-2 border border-purple-500 rounded-lg bg-gray-800 text-white" onChange={(e)=>settodate(e.target.value)}/></td>
            </tr>
            <tr className="border-b border-purple-600">
                <td className="py-3 px-4 text-left font-semibold">To Time</td>
                <td className="py-3 px-4"><input type="time" id="totime" className="input-field w-full p-2 border border-purple-500 rounded-lg bg-gray-800 text-white" onChange={(e)=>settotime(e.target.value)}/></td>
            </tr>
            <tr>
                <td className="py-3 px-4 text-left font-semibold">Reason</td>
                <td className="py-3 px-4"><input type="text" id="reason" className="input-field w-full p-2 border border-purple-500 rounded-lg bg-gray-800 text-white" onChange={(e)=>setreason(e.target.value)}/></td>
            </tr>
        </tbody>
    </table>

  
          <button onClick={handleClick} className="cursor-pointer w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition">
            Submit Changes
          </button>
        </div>
      </div>
  )
}

export default Editpage;