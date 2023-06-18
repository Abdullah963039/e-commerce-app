export function addToSession(key, id) {
  // Get session object according to key
  const sessionCategories = JSON.parse(sessionStorage.getItem(key));

  // Check if session key already exists
  if (sessionCategories == null) {
    sessionStorage.setItem(key, JSON.stringify([id]));
  } else {
    // Check if id already exists in session
    if (sessionCategories.find((sessionId) => sessionId === id)) return;
    sessionCategories.push(id);
    sessionStorage.setItem(key, JSON.stringify(sessionCategories));
  }
}
