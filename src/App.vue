<template>
  <div>
    <Navbar />
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/NavbarView.vue'
import Footer from './components/FooterView.vue'

export default {
  components: { Navbar, Footer }
}
</script>