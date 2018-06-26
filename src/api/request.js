import fetch from '@/utils/fetch'


function request(url,method,data) {     //data传参
  return fetch({
    url: url,
    method: method,
    data: data
  })
}

function get(url,method,data) {         //params传参
  return fetch({
    url: url,
    method: method,
    params: data
  })
}

export default request

