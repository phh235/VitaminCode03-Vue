<template>
  <button
    class="px-3 py-2 bg-sky-500 hover:bg-sky-500/80 duration-200 text-white rounded cursor-pointer"
    @click="handleBackToListUser"
  >
    Back to list user
  </button>
  <!-- <router-link to="/user-management" class="px-3 py-2 bg-sky-500 text-white">
    Back to list user
  </router-link> -->

  <h1>User detail</h1>
  <p>User ID: {{ route.params.id }}</p>
  <!-- lấy được ID rồi thì truyền ID vào API để GET -->
  <div class="flex flex-col gap-2">
    <div class="flex flex-col gap-1">
      <label class="font-semibold">Username</label>
      <input
        type="text"
        class="border border-[#f5f5f5] px-2 py-1 rounded"
        v-model="user.username"
      />
    </div>
    <div class="flex flex-col gap-1">
      <label class="font-semibold">Fullname</label>
      <input type="text" class="border border-[#f5f5f5] px-2 py-1 rounded" v-model="user.name" />
    </div>
    <div class="flex flex-col gap-1">
      <label class="font-semibold">Email</label>
      <input type="text" class="border border-[#f5f5f5] px-2 py-1 rounded" v-model="user.email" />
    </div>
  </div>
</template>

<script setup>
import axios from "axios"
import { ref, onMounted } from "vue"
import { useRouter, useRoute } from "vue-router"

const route = useRoute()
const router = useRouter()
const user = ref({}) // object

const handleBackToListUser = () => {
  router.push("/user-management")
}

const getUserDetail = async () => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
    Object.assign(user.value, res.data)
  } catch (e) {
    console.log(e)
  }
}

onMounted(() => {
  getUserDetail()
})
</script>
