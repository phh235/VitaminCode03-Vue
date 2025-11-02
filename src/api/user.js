import { apiService } from "./apiService"

export const getAllUsers = async () => {
  const response = await apiService.get("users/get-all-user")
  return response
}

export const getUserByUsername = async (username) => {
  const response = await apiService.get(`users/get-by-username?username=${username}`)
  return response
}

export const createUser = async (user) => {
  const response = await apiService.post("users/create", user)
  return response
}

export const updateUser = async (user) => {
  const response = await apiService.put("users/save", user)
  return response
}
