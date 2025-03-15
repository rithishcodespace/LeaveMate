import { createBrowserRouter,Navigate } from "react-router-dom";
import Login from "./components/Login";
import Body from "./components/Body";
import ApprovedLeaves from "./components/ApprovedLeaves";
import LeaveBalance from "./components/LeaveBalance";
import LeaveHistory from "./components/LeaveHistory";
import RejectedLeaves from "./components/RejectedLeaves";
import PendingRequest from "./components/PendingRequest";
import Applyleave from "./components/Applyleave";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/signup"
import Editpage from "./components/Editpage";


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
  path:"/signup",
  element:<Signup/>
},
{
  path:"/dashboard",
  element:<ProtectedRoute allowedRoles={["student"]}><Body/></ProtectedRoute>,
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
    // {
    //   path:"notifications",
    //   element:<Notifications/>
    // },
    {
      path:"rejectedleaves",
      element:<RejectedLeaves/>
    },
  ]
},
{
  path:"/admin",
  element:<ProtectedRoute allowedRoles={["admin"]}><AdminDashboard/></ProtectedRoute>
},
{
  path:"/editpage/:id",
  element:<ProtectedRoute allowedRoles={["student"]}><Editpage/></ProtectedRoute>
}
])

export default route;