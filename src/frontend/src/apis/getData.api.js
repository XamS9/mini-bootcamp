async function GetData(path) {
    try{
    const fetchedData = await fetch(window.env.URL+path, {
        method: "GET",
        mode: "cors",
        headers: {"content-type" : "aplication/json"}
      }).then((res) => res.json())
        .then((data) => {
          return data
        })
      return fetchedData;
    }catch(error){
        console.log(error)
    }
}

export default GetData;