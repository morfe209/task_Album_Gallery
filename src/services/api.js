import axios from "axios";


/**
*A wrapper around axios API call that format errors, etc
*@param {string} method the HTTP verb you want to use
*@param {string} path the route path/endpoint
*@param {object} data (optional) data in JSON form for POST requests
*/


export function apiCall(method, path){
  return new Promise((resolve, reject) => {
    return axios[method.toLowerCase()](path)
    .then(res => {
      return resolve(res.data);
    })
    .catch(error => {
        return reject(error.response.data.error);
    });
  });
}