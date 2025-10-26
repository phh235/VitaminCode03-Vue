<template>
  <div class="flex flex-col gap-1">
    <label class="font-bold">{{ props.label }}</label>
    <div class="relative">
      <input
        :type="inputType"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
        class="p-2 border border-gray-300 rounded-md w-full"
      />
      <button
        v-if="isPassword"
        class="absolute right-2 top-1/2 -translate-y-1/2"
        @click="toggleShowPassword"
      >
        <Eye v-if="showPassword" class="size-4 text-gray-500" />
        <EyeOff v-else class="size-4 text-gray-500" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { EyeOff, Eye } from "lucide-vue-next"
import { ref, computed } from "vue"
// component re-use
const showPassword = ref(false)
const isPassword = computed(() => props.type === "password")
const inputType = computed(() =>
  isPassword.value ? (showPassword.value ? "text" : "password") : props.type
)

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
}
// props / emit
const props = defineProps({
  label: String,
  type: {
    type: String,
    default: "text",
  },
  modelValue: String,
  placeholder: String,
})

defineEmits(["update:modelValue"])
</script>
