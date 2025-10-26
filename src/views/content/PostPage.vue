<template>
  <div v-for="post in postStore.posts" :key="post.id">
    <p>{{ post.title }}</p>
    <p>{{ post.body }}</p>
    <p>{{ post.body }}</p>
  </div>
</template>

<script setup>
import { usePostStore } from "../../stores/postStore"
import { onMounted } from "vue"

const postStore = usePostStore()

onMounted(() => {
  postStore.getPosts()
})
</script>
