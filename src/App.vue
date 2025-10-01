<script setup>
import HeaderComponent from "./components/header/HeaderComponent.vue"
</script>

<template>
  <div class="flex min-h-screen">
    <HeaderComponent />
    <div class="p-10 bg-white w-full">
      <router-view />
    </div>
  </div>
  <!-- render các route trong component -->
  <!-- hứng toàn bộ -->
</template>

<!-- views - pages -->
<!-- layouts - parent ~ children -->

<!--
- trong views - chứa các chức năng chính

-->
