


<template>
  <navbar></navbar>
  <router-view></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default{
  components: { Navbar }
}
</script>


<style>
body {
  padding: 1rem;
  margin: 0rem;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
}
</style>
