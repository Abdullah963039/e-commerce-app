/**
 *
 * @param {String} key query param key
 * @param {String | Array} value query param value
 * @returns {String}
 */
export function toQueryString(key, value) {
  let queryParam = "";

  if (Array.isArray(value)) {
    queryParam = value.map((item) => `${key}=${item}`).join("&");
  } else {
    queryParam = `${key}=${value}`;
  }

  return queryParam;
}
