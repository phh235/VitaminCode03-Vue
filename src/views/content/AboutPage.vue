<template>
  <p>{{ counterStore.count }}</p>
  <button @click="counterStore.incrementCount">Tăng</button>
</template>

<script setup>
import { useCounterStore } from "../../stores/counter"

const counterStore = useCounterStore()
</script>
