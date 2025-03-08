import { useState } from "react";
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import { logout } from "../utils/loggedinslice";
import { useNavigate } from "react-router-dom";


const Applyleave = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selector = useSelector((store)=>store.userSlice)

    const[leavetype,setleavetype] = useState("");
    const[fromdate,setfromdate] = useState("");
    const[fromtime,setfromtime] = useState("");
    const[todate,settodate] = useState("");
    const[totime,settotime] = useState("");
    const[reason,setreason] = useState("");
    const[name,setname] = useState(selector.name);
    const[emailId,setemailId] = useState(selector.emailId);

    async function handleClick()
    {
      try{
        if(leavetype.trim()!="" && fromdate.trim()!="" && fromtime.trim()!="" && todate.trim()!="" && totime.trim()!="" && reason.trim()!="")
        {
          axios.post("http://localhost:5000/applyleave",{leavetype,fromdate,fromtime,todate,totime,reason,name,emailId},{
            headers:{"Content-Type":"application/json"}
          })
          .then((response)=>{
            if(response.status==200)
            {
                alert("Application received successfully!");
                document.getElementById(leavetype).value="";
                document.getElementById(fromdate).value="";
                document.getElementById(fromtime).value="";
                document.getElementById(todate).value="";
                document.getElementById(totime).value="";
                document.getElementById(reason).value="";
            }
            else console.log("there is an error in submitting the leave application")
          })
        }
        else
        {
          alert("Fill all the fields!")
        }
      }
      catch(error)
      {
        console.log(error);
      }
        
    }

    function handleLogout()
    {
      dispatch(logout());
      navigate("/login");
    }


    return (
      <div className="flex justify-center items-center h-screen bg-black text-white max-w-screen">
      <button className="p-2 bg-violet-600 text-black font-serif absolute top-5 left-[1430px] rounded-lg cursor-pointer hover:bg-violet-900" onClick={handleLogout}>Logout</button>
        <div className="bg-[#1a1a2e] p-8 rounded-xl shadow-lg w-[500px] mb-8">
          <h2 className="text-xl font-bold text-purple-400 text-center mb-4">
            Apply for Leave
          </h2>
          
          <table className="w-full mx-auto bg-gray-900 text-purple-400 border border-purple-600 rounded-lg shadow-lg">
        <tbody>
            <tr className="border-b border-purple-600">
                <td className="py-3 px-4 text-left font-semibold">Leave Type</td>
                <td className="py-3 px-4"><input type="text" id="leavetype" className="input-field w-full p-2 border border-purple-500 rounded-lg bg-gray-800 text-white" onChange={(e)=>setleavetype(e.target.value)} /></td>
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
            Submit
          </button>
        </div>
      </div>
    );
  };
  
  export default Applyleave;
  