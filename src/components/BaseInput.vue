<template>
  <div class="flex flex-col gap-1">
    <label class="font-bold">{{ label }}</label>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      class="border border-[#808080] rounded-md p-2 outline-none"
    />
  </div>
</template>
<script setup>
defineProps({
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
