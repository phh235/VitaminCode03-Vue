import { apiService } from "./apiService"

export const getAllUsers = async () => {
  const response = await apiService.get("users/get-all-user")
  return response
}

