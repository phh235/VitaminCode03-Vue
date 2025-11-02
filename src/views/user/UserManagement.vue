<template>
    <button
      class="px-4 py-2 rounded-full bg-[#41ba84] text-white cursor-pointer hover:bg-[#41ba84]/80 duration-200 shadow-sm mb-3"
      @click="router.push('/user-management/create')"
    >
      Create new
    </button>
  <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
    <div
      v-for="user in userStore.users"
      :key="user.id"
      class="border border-gray-300 rounded-2xl p-3 shadow hover:scale-[1.05] duration-200 cursor-pointer hover:border-blue-500"
      @click="handleToUserDetail(user.username)"
    >
      <p>Username: {{ user.username }}</p>
      <p>Role: {{ user.role }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import { useRouter } from "vue-router"
import { useUserStore } from "../../stores/userStore"

const router = useRouter()
const userStore = useUserStore()

const handleToUserDetail = (username) => {
  router.push(`/user-management/detail/${username}`)
}

// onMounted -> được gọi khi component được mount.
onMounted(() => {
  userStore.getUsers()
})
</script>
