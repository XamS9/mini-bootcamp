import { createContext, useEffect, useState } from "react";
import StateSetter from "../hooks/stateSetter";
import UserSetter from "../hooks/userSetter";
import PostData from "../apis/postData.api";
export const AppContext = createContext()

export const LoginContext = ({children}) =>{
    const [loginState,setloginState] = useState(false);
    const [userData, setuserData] = useState(null);
    const [refresh, setRefresh] = useState(0);
    const [suscribedCourses, setsuscribedCourses] = useState([])
    useEffect(() => {
        PostData('/coursesuscribed').then((res) => res.json()).then((data) =>{
            data.forEach((element) => {
                if(!suscribedCourses.some(e => e.name === element.course.name))
                suscribedCourses.push(element.course)
            })
        })
    }, [loginState])
    StateSetter({setloginState});
    UserSetter({loginState, setuserData});
    return (
        <AppContext.Provider value={{ loginState, setloginState, userData, setuserData, refresh, setRefresh, suscribedCourses }}>
            {children}
        </AppContext.Provider>
    )
}