<template>
  <div v-if="loading">
    <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
      <div v-for="i in 10" :key="i" class="bg-gray-300 rounded-2xl p-3 animate-pulse h-20"></div>
    </div>
  </div>
  <div v-else class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
    <div
      v-for="user in users"
      :key="user.id"
      class="border border-gray-300 rounded-2xl p-3 shadow hover:scale-[1.05] duration-200 cursor-pointer hover:border-blue-500"
      @click="handleToUserDetail(user.id)"
    >
      <p>{{ user.name }}</p>
      <p>{{ user.username }}</p>
      <p class="line-clamp-1">{{ user.phone }}</p>
      <p class="truncate">{{ user.email }}</p>
    </div>
  </div>
</template>

<script setup>
import axios from "axios"
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"

const users = ref([]) // nhận vào 1 mảng
const router = useRouter()
const loading = ref(false)

const handleToUserDetail = (userId) => {
  router.push(`/user-management/detail/${userId}`)
}

const getAllUser = async () => {
  loading.value = true // hiện loading
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    users.value = response.data
  } catch (e) {
    console.log(e)
  } finally {
    loading.value = false // tắt loading
  }
}

// onMounted -> được gọi khi component được mount.
onMounted(() => {
  getAllUser()
})
</script>
