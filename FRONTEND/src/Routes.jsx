import { createBrowserRouter,Navigate } from "react-router-dom";
import Login from "./components/Login";
import Body from "./components/Body";
import ApprovedLeaves from "./components/ApprovedLeaves";
import LeaveBalance from "./components/LeaveBalance";
import LeaveHistory from "./components/LeaveHistory";
import RejectedLeaves from "./components/RejectedLeaves";
import Notifications from "./components/Notifications";
import PendingRequest from "./components/PendingRequest";
import Applyleave from "./components/Applyleave";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute"


const route = createBrowserRouter([
{
  path:"/",
  element:<Navigate to="/login" />  
  // element:<AdminDashboard/>  
},
{
  path:"/login",
  element:<Login/>
},
{
  path:"/dashboard",
  element:<ProtectedRoute element={<Body/>} allowedRoles={["student"]}/>,
  // element:<Body/>,
  children:[
    {
      path:"",
      element:<Applyleave/>
    },
    {
      path:"pendingrequest",
      element:<PendingRequest/>
    },
    {
      path:"approvedleaves",
      element:<ApprovedLeaves/>
    },
    {
      path:"leavebalance",
      element:<LeaveBalance/>
    },
    {
      path:"leavehistory",
      element:<LeaveHistory/>
    },
    {
      path:"notifications",
      element:<Notifications/>
    },
    {
      path:"rejectedleaves",
      element:<RejectedLeaves/>
    },
  ]
},
{
  path:"/admin",
  element:<ProtectedRoute element={<AdminDashboard/>} allowedRoles={["admin"]}/>
}
])

export default route;