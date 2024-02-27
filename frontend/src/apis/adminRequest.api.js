import { returnToken } from "../helpers/localStorage.helper";

async function GetUsers(path) {
  const Users = await fetch(process.env.REACT_APP_URL+path, {
    method: "GET",
    mode: "cors",
    headers: {
      authorization: "bearer " + returnToken(),
    }
  })
    .then((res) => res.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.log(error);
    });
    return Users;
}

export default GetUsers;
