<template>
  <div>{{ props.message }}</div>
  <div>{{ props.age }}</div>
  <div>{{ props.isActive }}</div>
  <div>{{ props.userInfo.name }}</div>
  <div>{{ props.userInfo.age }}</div>
  <div>{{ props.userInfo.email }}</div>

  <button
    class="px-4 py-2 bg-sky-600 hover:bg-sky-600/80 duration-200 text-white rounded-full cursor-pointer shadow-md"
    @click="handleEmitToParent"
  >
    Emit to parent
  </button>
</template>

<script setup>
const props = defineProps({
  message: String,
  age: Number,
  isActive: Boolean,
  userInfo: Object,
})

const handleEmitToParent = () => {
  emit("sendEvent") // camel-case
}

const emit = defineEmits(["sendEvent"])
</script>
