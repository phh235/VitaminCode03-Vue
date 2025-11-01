import { defineStore } from "pinia"
import { ref } from "vue"
import { getAllUsers } from "../api/user"

export const useUserStore = defineStore("user", () => {
  const users = ref([])

  const getUsers = async () => {
    const response = await getAllUsers()
    users.value = response.data
  }

  return { users, getUsers }
})
