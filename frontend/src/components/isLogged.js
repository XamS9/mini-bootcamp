import { Navigate, Outlet } from "react-router-dom";
export const IsLogged = ({user, children, redirectTo='/login'}) => {
    if(!user){
        return <Navigate to={redirectTo}/>
    } else {
    return children ? children : <Outlet/>
    }
}