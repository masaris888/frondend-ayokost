<!-- halaman home -->
<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Hero -->
    <section class="bg-gradient-to-r from-green-500 to-emerald-600 py-20 mb-10 animate-fade-in">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in">
          Selamat Datang di AyoKost
        </h1>
        <p class="text-lg text-white opacity-90">
          Temukan kamar kos yang nyaman dan sesuai kebutuhan Anda.
        </p>
      </div>
    </section>

    <!-- Daftar Kamar -->
    <div class="p-6 max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">Daftar Kamar Tersedia</h2>

      <ul class="space-y-4 animate-fade-in">
        <li
          v-for="kamar in kamars"
          :key="kamar.id"
          class="bg-white rounded-lg shadow p-5"
        >
          <h3 class="text-xl font-semibold text-gray-800">{{ kamar.nama }}</h3>
          <p class="text-gray-500">Lokasi: {{ kamar.lokasi }}</p>
          <p class="text-green-600 font-medium">Rp {{ kamar.harga }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<!-- end halaman home -->

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      kamars: []
    };
  },
  mounted() {
    this.getKamars();
  },
  methods: {
    getKamars() {
      fetch('https://kost-backend.anampict.workers.dev/kamar')
        .then(res => res.json())
        .then(data => this.kamars = data);
    }
  }
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .animate-fade-in {
    animation: fadeIn 1s ease-out;
  }

  .animate-slide-in {
    animation: slideIn 1s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>
