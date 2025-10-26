import { defineStore } from "pinia"
import { ref } from "vue"
import { getAllPosts } from "../api/post"

export const usePostStore = defineStore("post", () => {
  const posts = ref([])

  const getPosts = async () => {
    const res = await getAllPosts()
    posts.value = res.data
  }

  return { posts, getPosts }
})
