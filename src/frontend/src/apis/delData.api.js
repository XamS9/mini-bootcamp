import { returnToken } from "../helpers/localStorage.helper";
async function DelData(data) {
    try{
    const deletedData = await fetch(process.env.REACT_APP_URL+data, {
        method: "DELETE",
        mode: "cors",
        headers: {
            authorization: "bearer " + returnToken(),
          }
      })
      return deletedData;
    }catch(error){
        console.log(error)
    }
}

export default DelData;