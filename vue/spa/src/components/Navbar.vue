<template>
  <div class="navbar">
    <my-button @click="$router.push('/')">Main</my-button>
    <my-button @click="$router.push('/posts')">Posts state in component</my-button>
    <my-button @click="$router.push('/store')">Posts with vuex store</my-button>
    <my-button @click="$router.push('/hooks')">Posts with Hooks</my-button>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: start;
  flex-direction: row;
  gap: 1rem;
  height: 2rem;
  width: 100%;
}
</style>