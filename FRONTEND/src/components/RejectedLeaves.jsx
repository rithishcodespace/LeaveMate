import {useEffect,useState} from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { logout } from "../utils/loggedinslice";


let RejectedLeaves = () =>{

    const selector = useSelector((store)=>store.userSlice);
    const[rejectedData,setrejectedData] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        function fetchData()
        {
            try{
                axios.get("http://localhost:5000/rejected")
                .then((response)=>{
                 if(response.status != 200)
                 {
                     alert("There is an error in fetching the pending data");
                 }
                 else
                 {
                     setrejectedData(response.data);
                     if(response.data.length==0)alert("NO REJECTED APPLICATIONS FOUND");
                 }
                })
            }
            catch(error)
            {
                alert("There is an error in fetch the pending data",error)
            }
        }
        fetchData();
    },[]);

    function handleLogout()
    {
        dispatch(logout());
        navigate("/login");
    }

    return(
        <div className="flex items-center justify-center ">
             <button className="p-2 bg-violet-600 text-black font-serif absolute top-5 left-[1430px] rounded-lg cursor-pointer hover:bg-violet-900" onClick={handleLogout}>Logout</button>
           <div>
              <table className="border-spacing-1  w-[850px] border-separate border border-violet-600 overflow-x-hidden overflow-y-scroll">
                <thead>
                    <tr className="border-purple-600 border-b-4 border">
                        <th className="border border-violet-500 px-4 py-2">Name</th>
                        <th className="border border-violet-500 px-4 py-2">EmailId</th>
                        <th className="border border-violet-500 px-4 py-2">From date</th>
                        <th className="border border-violet-500 px-4 py-2">To date</th>
                        <th className="border border-violet-500 px-4 py-2">Reason</th>
                        <th className="border border-violet-500 px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                        {rejectedData.length!=0  &&
                          rejectedData.map((pending,index)=>(
                             <tr key={index} className="border-purple-600">
                                <td className="border border-violet-500 px-4 py-2">{selector.name}</td>
                                <td className="border border-violet-500 px-4 py-2">{selector.emailId}</td>
                                <td className="border border-violet-500 px-4 py-2">{pending.fromdate}</td>
                                <td className="border border-violet-500 px-4 py-2">{pending.todate}</td>
                                <td className="border border-violet-500 px-4 py-2">{pending.reason}</td>
                                <td className="border border-violet-500 px-4 py-2 bg-red-600">rejected</td>
                             </tr>
                          ))
                        }
                </tbody>
              </table>
           </div>
        </div>
    )
}

export default RejectedLeaves;