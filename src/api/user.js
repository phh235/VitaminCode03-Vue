import axios from "axios"

export const getAllUsers = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users")
  return response
}

export const getUserById = async (id) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  return response
}
