import { returnToken } from "../helpers/localStorage.helper";
async function UpdateData(path, data) {
  try {
    const updatedData = await fetch(window.env.URL + path, {
      method: "PUT",
      mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
        authorization: "bearer " + returnToken(),
      },
    });
    return updatedData;
  } catch (error) {
    console.log(error);
  }
}

export default UpdateData;
