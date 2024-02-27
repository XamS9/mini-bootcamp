import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../context/loginContext";
import { useContext } from "react";
export const IsUser = ({children, redirectTo='/home'}) => {
    const context = useContext(AppContext);
    if(context.userData.role === 'user'){
        return <Navigate to={redirectTo}/>
    } else {
    return children ? children : <Outlet/>
    }
}