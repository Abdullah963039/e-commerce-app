/**
 * Converts object to query string
 *
 * @param {object} object - target object to convert
 * @returns {string}
 */
export function toQueryString(object) {
  let entries = Object.entries(object)
    .map((entry) => `${entry[0]}=${entry[1]}`)
    .join("&");

  return entries;
}

export function arrayToQueryString(array, key) {
  let qs = array.map((item) => `${key}[in][]=${item}`).join("&");

  return qs;
}
