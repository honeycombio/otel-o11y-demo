// /etc/nginx/headers.js
function headers_json(r) {
    return JSON.stringify(r.headersIn)
  }
  
  export default {headers_json};
