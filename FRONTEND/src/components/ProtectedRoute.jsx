import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

let ProtectedRoute = ({element,allowedRoles}) =>{
    const user = useSelector((store)=>store.loggedinslice);
    if(!user.loggedIn) return <Navigate to="/login"/>
    if(!allowedRoles.includes(user.role))
    {
      return <Navigate to="/unauthorized"/>
    }
    return element;
}

export default ProtectedRoute;