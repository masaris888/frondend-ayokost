<!-- navbar -->
<template>
  <nav class="bg-green-600 text-white p-4 flex justify-between items-center">
    <h1 class="text-xl font-bold">KostKu</h1>
    <div class="space-x-4">
      <router-link to="/" class="hover:underline">Beranda</router-link>
      <router-link to="/kelola" class="hover:underline"
        >Kelola Kamar</router-link
      >
    </div>
  </nav>
</template>
<!-- end navbar -->


<script>
export default {
    name: 'NavbarView',
};
</script>

<style>
</style>