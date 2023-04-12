async function PostJSONData(url, data) {
    try{
    const postedData = await fetch(process.env.REACT_APP_URL+url, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" }
      }).then((res) => {
        return res;
      })
      return postedData;
    }catch(error){
        console.log(error)
    }
}

export default PostJSONData;