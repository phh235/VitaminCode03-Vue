<template>
  <div class="px-2 py-5 bg-gray-100 border-r border-gray-300 w-[300px]">
    <div class="flex flex-col items-center gap-1">
      <router-link
        v-for="item in sidebarItems"
        :to="item.to"
        :key="item.name"
        class="w-full p-2 rounded hover:bg-[#DBE2EF] hover:text-[#3F72AF] flex items-center gap-2 transition-all duration-200"
        :class="route.path === item.to ? '!bg-[#3F72AF] !text-white' : ''"
      >
        <component :is="item.icon" class="size-4" />
        {{ item.name }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { Info, Home, UserRound } from "lucide-vue-next"
import { ref } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

const sidebarItems = ref([
  {
    name: "Home",
    to: "/home",
    icon: Home,
  },
  {
    name: "About",
    to: "/about",
    icon: Info,
  },
  {
    name: "User Management",
    to: "/user-management",
    icon: UserRound,
  },
])
</script>
