import { returnToken } from "../helpers/localStorage.helper";

async function PostData(path, data) {
    try{
    const postedData = await fetch(process.env.REACT_APP_URL+path, {
        method: "POST",
        mode: "cors",
        body: data,
        headers: {
          authorization: "bearer " + returnToken(),
        },
      }).then((res) => {
        return res;
      })
      return postedData;
    }catch(error){
        console.log(error)
    }
}

export default PostData;