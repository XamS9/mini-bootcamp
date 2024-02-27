import { returnToken } from "../helpers/localStorage.helper";
import { tokenAge } from "../helpers/tokenAge.helper";
async function UserData(setuserData) {
  const User = await fetch(process.env.REACT_APP_URL+"/users/data", {
    method: "POST",
    mode: "cors",
    headers: {
      authorization: "bearer " + returnToken(),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (tokenAge(data.data.message)) return data.data;
    })
    .catch((error) => {
      console.log(error);
    });
  setuserData(User);
}

export default UserData;
