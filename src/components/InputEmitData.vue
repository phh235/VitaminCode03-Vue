<template>
  <input v-model="inputValue" @input="handleInput" class="border border-gray-300 rounded-md p-2" />
</template>

<script setup>
import { ref } from "vue"

const emit = defineEmits(["update"])
const inputValue = ref("")

const handleInput = () => {
  emit("update", inputValue.value)
}
</script>
