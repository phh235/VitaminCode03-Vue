<template>
  <div>{{ props.title }}</div>
  <div>{{ props.age }}</div>
  <div>{{ props.isActive }}</div>
  <div>{{ props.user.name }}</div>
  <div>{{ props.user.age }}</div>

  <button
    @click="handleSendEventToParent"
    class="px-4 py-2 bg-sky-500 hover:bg-sky-500/80 duration-200 text-white rounded-full cursor-pointer shadow-md"
  >
    Emit to parent
  </button>
</template>

<script setup>
const props = defineProps({
  title: String,
  age: Number,
  isActive: Boolean,
  user: Object,
})

const handleSendEventToParent = () => {
  emit("sendEvent")
}

const emit = defineEmits(["sendEvent"])
</script>
