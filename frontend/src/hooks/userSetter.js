import { useEffect } from "react";
import UserData from "../apis/userData.api";

export default function UserSetter({ loginState, setuserData }) {
    useEffect(() => {
      if(loginState)
        UserData(setuserData);
      }, [loginState])
}
