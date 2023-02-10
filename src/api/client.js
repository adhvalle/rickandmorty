import axios from 'axios'

let client

export const getClient = () => {
  if (!client) _init()
  return client
}

export const get = (url, query = {}) =>
  _request('GET', url, query)

const _init = () => {
  client = axios.create({ baseURL: import.meta.env.VITE_API_HOST })
}

const _request = async (method, url, query = {}) => {
  let error = null
  const response = await getClient().request({
    method,
    url,
    params: query
  }).catch(error => { console.log(error) })

  return new Promise((resolve, reject) => response ? resolve(response.data) : reject(error))
}
