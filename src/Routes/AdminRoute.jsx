import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth/useAuth";

const AdminRoute = ({children}) => {
    const {user, loading}= useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const locatin = useLocation()

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to={"/login"} state={{from: locatin}} replace></Navigate>
};

export default AdminRoute;