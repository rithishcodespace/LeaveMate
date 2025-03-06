import {useEffect,useState} from "react"
import axios from "axios"

let ApprovedLeaves = () =>{

    const[acceptedData,setacceptedData] = useState([]);

    useEffect(()=>{
        async function fetchData()
        {
            // try{
            //     const pending = axios.get("http://localhost:5000/accepted")
            //     .then((response)=>{
            //      if(!response.ok)
            //      {
            //          alert("There is an error in fetching the pending data");
            //      }
            //      else
            //      {
            //          setpendingData(pending.data);
            //      }
            //     })
            // }
            // catch(error)
            // {
            //     alert("There is an error in fetch the pending data",error)
            // }
            setacceptedData([{
                id:1,
                name:"Rithish",
                department:"cse",
                fromdate:7,
                todate:9,
                reason:"home fest",
                status:"accepted"
            }])
        }
        fetchData();
    },[]);

    return(
        <div className="flex items-center justify-center">
           <div>
              <table className="border-spacing-1 border-separate border border-violet-600 overflow-x-hidden overflow-y-scroll w-[850px]">
                <thead>
                    <tr className="border-purple-600 border-b-4 border">
                        <th className="border border-violet-500 px-4 py-2">S.no</th>
                        <th className="border border-violet-500 px-4 py-2">Name</th>
                        <th className="border border-violet-500 px-4 py-2">Department</th>
                        <th className="border border-violet-500 px-4 py-2">From date</th>
                        <th className="border border-violet-500 px-4 py-2">To date</th>
                        <th className="border border-violet-500 px-4 py-2">Reason</th>
                        <th className="border border-violet-500 px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                        {acceptedData.length!=0 &&
                          acceptedData.map((pending,index)=>(
                             <tr className="border-purple-600">
                                <td className="border border-violet-500 px-4 py-2">{pending.id}</td>
                                <td className="border border-violet-500 px-4 py-2">{pending.name}</td>
                                <td className="border border-violet-500 px-4 py-2">{pending.department}</td>
                                <td className="border border-violet-500 px-4 py-2">{pending.fromdate}</td>
                                <td className="border border-violet-500 px-4 py-2">{pending.todate}</td>
                                <td className="border border-violet-500 px-4 py-2">{pending.reason}</td>
                                <td className="border border-violet-500 px-4 py-2 bg-green-600">{pending.status}</td>
                             </tr>
                          ))
                        }
                </tbody>
              </table>
           </div>
        </div>
    )
}

export default ApprovedLeaves;