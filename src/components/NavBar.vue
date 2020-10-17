<template>
  <div class="flex justify-between items-center py-3 px-10 shadow-xl">
    <div>
      <router-link to="/" tag="h1" class="text-gray-500 text-4xl cursor-pointer"
        >Ham Promotion</router-link
      >
    </div>
    <div>
      <router-link
        to="/Qualified"
        tag="span"
        class="px-4 cursor-pointer font-semibold"
        >Qualified</router-link
      >
      <router-link
        to="/products"
        tag="span"
        class="px-4 cursor-pointer font-semibold"
        >Products</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>