<template>
  <div class="p-6 max-w-2xl mx-auto">
    <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">Kelola Kamar</h2>

    <form @submit.prevent="tambahKamar" class="space-y-4 bg-white p-4 rounded-lg shadow">
      <div class="grid grid-cols-1 gap-4">
        <input
          v-model="form.nama"
          type="text"
          placeholder="Nama Kamar"
          class="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          v-model="form.lokasi"
          type="text"
          placeholder="Lokasi"
          class="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          v-model="form.harga"
          type="number"
          placeholder="Harga"
          class="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div class="flex items-center gap-4">
        <button type="submit" class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
          {{ editId ? 'Update' : 'Tambah' }}
        </button>
        <button v-if="editId" type="button" @click="batalEdit" class="text-gray-600 hover:text-gray-900">
          Batal
        </button>
      </div>
    </form>

    <ul class="mt-8 space-y-3">
      <li
        v-for="kamar in kamars"
        :key="kamar.id"
        class="flex justify-between items-center bg-white p-4 rounded shadow"
      >
        <div>
          <p class="font-semibold text-gray-800">{{ kamar.nama }}</p>
          <p class="text-sm text-gray-500">{{ kamar.lokasi }}</p>
          <p class="text-sm text-green-600 font-medium">Rp {{ kamar.harga }}</p>
        </div>
        <div class="flex gap-2">
          <button @click="editKamar(kamar)" class="text-blue-600 hover:text-blue-800 font-medium">
            ✏️ Edit
          </button>
          <button @click="hapusKamar(kamar.id)" class="text-red-600 hover:text-red-800 font-medium">
            🗑️ Hapus
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'KelolaView',
  data() {
    return {
      kamars: [],
      form: { nama: '', lokasi: '', harga: '' },
      editId: null,
    };
  },
  mounted() {
    this.getKamars();
  },
  methods: {
    getKamars() {
      fetch(`https://kost-backend.anampict.workers.dev/kamar`)
        .then(res => res.json())
        .then(data => this.kamars = data);
    },
    tambahKamar() {
      const url = this.editId
        ? `https://kost-backend.anampict.workers.dev/kamar/${this.editId}`
        : `https://kost-backend.anampict.workers.dev/kamar`;

      const method = this.editId ? 'PUT' : 'POST';

      fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.form)
      }).then(() => {
        this.getKamars();
        this.form = { nama: '', lokasi: '', harga: '' };
        this.editId = null;
      });
    },
    editKamar(kamar) {
      this.form = { nama: kamar.nama, lokasi: kamar.lokasi, harga: kamar.harga };
      this.editId = kamar.id;
    },
    batalEdit() {
      this.form = { nama: '', lokasi: '', harga: '' };
      this.editId = null;
    },
    hapusKamar(id) {
      fetch(`https://kost-backend.anampict.workers.dev/kamar/${id}`, { method: 'DELETE' })
        .then(() => this.getKamars());
    }
  }
};
</script>
