import {useState,useEffect} from "react";
import axios from "axios";
import { spacing } from "@mui/system";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/loggedinslice";

let LeaveHistory = () =>{

    const [history,sethistory] = useState([])
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        // function getData()
        // {
        //     try{
        //         const his = axios.get("http://localhost:5000/history")
        //         .then((response)=>{
        //             if(!response.ok || response.data.length<0)
        //             {
        //                 alert("History not found")
        //             }
        //             else
        //             {
        //                 sethistory(response.data)
        //             }
        //         })
        //     }
        //     catch(error){
        //         console.log("ERROR:",error);
        //     }
        // } 
        sethistory([{
            id:1,
            name:"Rithish",
            department:"cse",
            fromdate:7,
            todate:9,
            reason:"home fest",
            status:"accepted"
        }])  
    },[]);

    function handleLogout()
    {
        dispatch(logout());
        navigate("/login");
    }

    return(
        <div className="flex justify-center items-center">
           <button className="p-2 bg-violet-600 text-black font-serif absolute top-5 left-[1430px] rounded-lg cursor-pointer hover:bg-violet-900" onClick={handleLogout}>Logout</button>
            <div>
              <p className="text-purple-500 text-3xl font-mono relative left-72 mb-4">Leave History</p>
              {history.length!=0 && 
               history.map((history,index)=>(
                <div key={index} className="h-auto w-[800px] bg-slate-900 shadow-purple-700 shadow-lg rounded-md">
                  <div className="p-2">
                    <p>📅 {history.from} to :{history.to}</p>
                  </div>
                  <p className="p-2">📝 {history.reason}</p>
                  {(history.status == "approved") ? <span className="text-green-500 p-3 text-xl font-serif">Approved</span> : (history.status=="pending") ? <span className="text-amber-500 p-2 text-xl font-serif">Pending</span> : <span className="text-red-500 p-3 text-xl font-serif">Rejected</span>}
                </div>
               ))
              }
            </div>
        </div>
    )
}

export default LeaveHistory;