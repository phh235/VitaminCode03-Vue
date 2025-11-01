<template>
  <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
    <div
      v-for="user in userStore.users"
      :key="user.id"
      class="border border-gray-300 rounded-2xl p-3 shadow hover:scale-[1.05] duration-200 cursor-pointer hover:border-blue-500"
      @click="handleToUserDetail(user.id)"
    >
      <p>{{ user.username }}</p>
      <p>{{ user.role }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import { useRouter } from "vue-router"
import { useUserStore } from "../../stores/userStore"

const router = useRouter()
const userStore = useUserStore()

const handleToUserDetail = (userId) => {
  router.push(`/user-management/detail/${userId}`)
}

// onMounted -> được gọi khi component được mount.
onMounted(() => {
  userStore.getUsers()
})
</script>
