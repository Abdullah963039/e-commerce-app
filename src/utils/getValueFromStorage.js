export function getLocal(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function getSession(key) {
  return JSON.parse(sessionStorage.getItem(key));
}
