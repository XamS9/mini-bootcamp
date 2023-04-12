import { delToken } from "./localStorage.helper";

export function tokenAge(token) {
  if (token === "jwt expired") {
    delToken();
    window.location.href = "/home";
  } else {
    return true;
  }
}
