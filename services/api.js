import axios from 'axios'
import { create } from 'apisauce'

export const fetchSales = () => {
  const customAxiosInstance = axios.create({ baseURL: 'https://delman-fe-api.fly.dev/' })

  const api = create({ axiosInstance: customAxiosInstance })

  return api.any({ method: 'GET', url: '/' })
}

export const fetchUsers = () => {
  const customAxiosInstance = axios.create({ baseURL: 'https://delman-fe-api.fly.dev/' })

  const api = create({ axiosInstance: customAxiosInstance })

  return api.any({ method: 'GET', url: '/users' })
}

export const createUser = ({ name, email }) => {
  const customAxiosInstance = axios.create({ baseURL: 'https://delman-fe-api.fly.dev/' })

  const api = create({ axiosInstance: customAxiosInstance })

  return api.post('/users', { name, email })
}

export const deleteUser = ({ id, name, email }) => {
  const customAxiosInstance = axios.create({ baseURL: 'https://delman-fe-api.fly.dev/' })

  const api = create({ axiosInstance: customAxiosInstance })

  return api.delete(`/users/${id}`, { id, name, email })
}
