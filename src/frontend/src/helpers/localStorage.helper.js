export function getToken(){
    if(window.localStorage.getItem("token"))
    return true    
}

export function setToken(token){
    window.localStorage.setItem("token", token)
}

export function delToken(){
    window.localStorage.clear();
}
export function returnToken(){
    return window.localStorage.getItem("token")
}