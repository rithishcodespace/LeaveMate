import {useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../utils/loggedinslice";

let Notifications = () =>{ //it will send you a notification when mentor approves your leave

    const[notifications,setnotifications] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        // function getData()
        // {
        //     try{
        //         axios.get("")
        //     .then((response)=>{
        //       if(!response.ok)
        //       {
        //          console.log("error occured while fetching notifications");
        //       }
        //       else
        //       {
        //          setnotifications(response.data);
        //       }
        //     })
        //     }
        //     catch(error)
        //     {
        //         console.log(error);
        //     }
        // }
        // getData();
        setnotifications([{
            id:1,
            name:"Rithish",
            department:"cse",
            fromdate:7,
            todate:9,
            reason:"home fest",
            status:"accepted"
        }])
    },[])

    function handleLogout()
    {
        dispatch(logout());
        navigate("/login");
    }

    return(
        <div className="flex justify-center items-center">
             <button className="p-2 bg-violet-600 text-black font-serif absolute top-5 left-[1430px] rounded-lg cursor-pointer hover:bg-violet-900" onClick={handleLogout}>Logout</button>
            {notifications && notifications.map((noti,index)=>(
              <div key={index} className="text-purple-500 text-3xl font-mono relative left-72">
                <p>{notifications.message}</p>
              </div>
            ))
            }
        </div>
    )
}

export default Notifications;