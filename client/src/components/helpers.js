
const baseUrl = 'http://localhost:2000/api/';

export function fetchWrapper(url) {
    return fetch(baseUrl + url);
}