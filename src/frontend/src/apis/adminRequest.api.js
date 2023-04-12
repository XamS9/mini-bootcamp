async function GetUsers(path) {
  const Users = await fetch(window.env.URL+path, {
    method: "GET",
    mode: "cors",
    headers: {
      authorization: "bearer " + window.localStorage.getItem("token"),
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
