import {useState,useEffect} from "react";
import axios from "axios";
// import { spacing } from "@mui/system";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/loggedinslice";

let LeaveHistory = () =>{

    const [history,sethistory] = useState([])
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        function getData()
        {
            try{
                axios.get("http://localhost:5000/history")
                .then((response)=>{
                    if(response.status != 200 || response.data.length<0)
                    {
                        alert("History not found")
                    }
                    else
                    {
                        sethistory(response.data);
                        console.log(response.data);
                    }
                })
            }
            catch(error){
                console.log("ERROR:",error);
            }
        } 
        getData();
    },[]);

    function handleLogout()
    {
        dispatch(logout());
        navigate("/login");
    }

    return(
        <div className="flex justify-center items-center h-screen">
  <button className="p-2 bg-violet-600 text-black font-serif absolute top-5 right-5 rounded-lg cursor-pointer hover:bg-violet-900" onClick={handleLogout}>Logout</button>
  
  <div className="h-[80vh] w-[90%] overflow-auto p-5">
    <p className="text-purple-500 text-3xl font-mono text-center mb-4">Leave History</p>
    
    {history.length !== 0 &&
      history.map((item, index) => (
        <div key={index} className="h-auto w-[800px] bg-slate-900 hover:scale-105 duration-300 shadow-sm shadow-violet-500 rounded-md m-5">
          <div className="p-2">
            <p>📅 {item.fromdate} to {item.todate}</p>
          </div>
          <p className="p-2">📝 {item.reason}</p>
          {item?.status === "accepted" ? (
            <span className="text-green-500 p-3 text-xl font-serif">Approved</span>
          ) : item?.status === "pending" ? (
            <span className="text-amber-500 p-2 text-xl font-serif">Pending</span>
          ) : (
            <span className="text-red-500 p-3 text-xl font-serif">Rejected</span>
          )}
        </div>
      ))
    }
  </div>
</div>

    )
}

export default LeaveHistory;