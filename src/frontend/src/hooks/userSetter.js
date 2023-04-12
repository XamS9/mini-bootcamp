import { useEffect } from "react";
import UserData from "../apis/userData.api";

export default function UserSetter({ loginState, setuserData }) {
    useEffect(() => {
        UserData(setuserData);
      }, [loginState])
}
