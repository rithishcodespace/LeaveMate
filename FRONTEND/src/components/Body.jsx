import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

let Body = () =>{

    const [open,setopen] = useState(true)

    return(
        <div className="flex flex-row h-screen w-screen bg-black overflow-x-hidden overflow-y-hidden">
            <div>
            <Sidebar open={open} setopen={setopen}/>
            </div>
            <div className={`flex-1 bg-black text-white transition-all duration-200 p-6 
                            ${open ? "sm:32 md:mr-64" : "sm:20 md:mr-36"}`}>
                <Outlet />
            </div>
        </div>
    )
}

export default Body;