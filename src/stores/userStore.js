import { defineStore } from "pinia"
import { ref } from "vue"
import { createUser, getAllUsers, getUserByUsername, updateUser } from "../api/user"

export const useUserStore = defineStore("user", () => {
  const users = ref([])
  const user = ref({})

  const getUsers = async () => {
    const response = await getAllUsers()
    users.value = response.data
  }

  const getUserInfo = async (username) => {
    const response = await getUserByUsername(username)
    user.value = response.data
  }

  const createNewUser = async (user) => {
    const response = await createUser(user)
    return response
  }
  
  const updateCurrentUser = async (user) => {
    const response = await updateUser(user)
    return response
  }

  return { users, user, getUsers, getUserInfo, createNewUser, updateCurrentUser }
})
