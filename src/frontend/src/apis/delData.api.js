async function DelData(data) {
    try{
    const deletedData = await fetch(window.env.URL+data, {
        method: "DELETE",
        mode: "cors",
        headers: {
            authorization: "bearer " + window.localStorage.getItem("token"),
          }
      })
      return deletedData;
    }catch(error){
        console.log(error)
    }
}

export default DelData;