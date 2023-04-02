<template>
   <div class="app-container">
      <div class="navbar">
         <Navbar />
      </div>
      <div class="router-view">
         <router-view />
      </div>
   </div>
</template>

<script setup>
import Navbar from "@/Layout/Navbar/Navbar.vue";
</script>

<style scoped lang="scss">
.router-view {
   margin: 2rem clamp(3vw, 100%, (100vw - 1652px) / 2);
   overflow: hidden;
}
</style>