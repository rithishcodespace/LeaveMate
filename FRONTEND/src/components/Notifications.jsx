import {useState,useEffect} from "react";
import axios from "axios";


let Notifications = () =>{ //it will send you a notification when mentor approves your leave

    const[notifications,setnotifications] = useState([]);
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

    return(
        <div className="flex justify-center items-center">
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