import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL
})

export const dynamicAxiosInstance = (baseUrl) => axios.create({
  baseURL: baseUrl
})

export const comToken = (token) => axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  }
})

export const semTokenIntegracao = () => axios.create({
  baseURL: process.env.REACT_APP_INTEGRACAO_URL,
})

export const comTokenFileSubmit = (token) => axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`,
  }
})

export const comTokenIntegracao = (token) => axios.create({
  baseURL: process.env.REACT_APP_INTEGRACAO_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  }
})
