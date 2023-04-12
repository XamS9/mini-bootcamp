import { useEffect } from "react";
import { getToken } from "../helpers/localStorage.helper";

export default function StateSetter({ setloginState }) {
  useEffect(() => {
    if (getToken()) setloginState(true);
    else {
      setloginState(false);
    }
  });
}
