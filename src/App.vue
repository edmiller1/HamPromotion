<template>
  <div id="app">
    <NavBar class="z-50 w-full" />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar
  }
};
</script>

<style>
</style>
