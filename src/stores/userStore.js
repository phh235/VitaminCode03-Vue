import { defineStore } from "pinia"
import { ref } from "vue"
import { getAllUsers, getUserById } from "../api/user"

export const useUserStore = defineStore("user", () => {
  const users = ref([])
  const user = ref(null)

  const getUsers = async () => {
    const response = await getAllUsers()
    users.value = response.data
  }

  const getUserInfo = async (id) => {
    const response = await getUserById(id)
    user.value = response.data
  }

  return { users, user, getUsers, getUserInfo }
})
