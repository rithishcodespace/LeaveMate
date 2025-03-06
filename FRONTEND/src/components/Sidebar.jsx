import { Link,useLocation } from "react-router-dom";

    let Sidebar = ({open,setopen}) =>{

        const location = useLocation();
        
        function handletoggle() {
           setopen(!open)
        }

        return(
            <>
                <div onClick={handletoggle}><img src="https://cdn-icons-png.flaticon.com/512/7915/7915462.png" className="fixed h-6 top-4 left-5 z-20 cursor-pointer" alt="namburger" /></div>
                <div id="sidebar" className={`flex flex-col flex-wrap justify-evenly h-screen w-60 bg-gradient-to-r from-black via-gray-900 to-black items-center duration-150 border border-double shadow-purple-600 shadow-xl ${!open ? "translate-x-0" : "-translate-x-64"}`}>
                    <Link to=""><div className={`flex justify-evenly flex-row gap-3 text-purple-500 font-mono cursor-pointer hover:hover:text-white rounded-lg h-10 pt-2 w-56`}><img src="https://cdn-icons-png.flaticon.com/512/1820/1820955.png" className="h-8 relative right-3.5" /><p className="relative right-5.5">Apply Leave</p></div></Link>
                    <Link to="pendingrequest"><div className="flex justify-evenly flex-row gap-3 text-purple-500 font-mono cursor-pointer w-56 hover:text-white rounded-lg h-10 pt-2"><img src="https://cdn-icons-png.flaticon.com/512/10722/10722591.png" className="h-8"/><p>Pending Request</p></div></Link>
                    <Link to="approvedleaves"><div className="flex justify-evenly flex-row gap-3 text-purple-500 font-mono cursor-pointer w-56 hover:text-white rounded-lg h-10 pt-2"><img src="https://icon-library.com/images/approved-icon-png/approved-icon-png-28.jpg" className="h-8"/><p>Approved Leaves</p></div></Link>
                    <Link to="rejectedleaves"><div className="flex justify-evenly flex-row gap-3 text-purple-500 font-mono cursor-pointer w-56 hover:text-white rounded-lg h-10 pt-2"><img src="https://cdn-icons-png.flaticon.com/512/4336/4336743.png" className="h-8"/><p>Rejected Leaves</p></div></Link>
                    <Link to="leavehistory"><div className="flex justify-evenly flex-row gap-3 text-purple-500 font-mono cursor-pointer w-56 hover:text-white rounded-lg h-10 pt-2"><img src="https://cdn-icons-png.flaticon.com/512/18611/18611084.png" className="h-8"/><p className="relative right-3">Leave history</p></div></Link>
                    <Link to="leavebalance"><div className="flex justify-evenly flex-row gap-3 text-purple-500 font-mono cursor-pointer w-56 hover:text-white rounded-lg h-10 pt-2"><img src="https://cdn-icons-png.freepik.com/512/11137/11137482.png?ga=GA1.1.1183695252.1734422419" className="h-8"/><p className="relative right-3">Leave Balance</p></div></Link>
                    <Link to="notifications"><div className="flex justify-evenly flex-row gap-3 text-purple-500 font-mono cursor-pointer w-56 hover:text-white rounded-lg h-10 pt-2"><img src="https://cdn-icons-png.flaticon.com/512/17822/17822135.png" className="h-8"/><p className="relative right-3">Notifications</p></div></Link>
                </div>
            </>
        )
    }

    export default Sidebar;