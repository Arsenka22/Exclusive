import { apiClient } from "./axiosConfig"

export const register = async (username: string, email: string, password: string) => {
  const response = await apiClient.post('/auth/users/', {username, email, password})
  return response.data
}

export const login = async (email: string, password: string) => {
  const response = await apiClient.post('/auth/jwt/create/', {email, password})
  return response.data
}

export const activateAccount = async (uid: string, token: string) => {
  const response = await apiClient.post('/auth/users/activation/', {uid, token})
  return response.data
}