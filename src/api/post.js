import axios from "axios"

export const getAllPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return res
}
