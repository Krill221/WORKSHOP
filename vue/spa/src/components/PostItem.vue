<template>
  <div class="post">
    <div class="name">Title: {{ post.title }}</div>
    <div>Body: {{ post.body }}</div>
    <div class="btns">
    <my-button @click="$router.push(`/posts/${post.id}`) ">open</my-button>
    <my-button @click="$emit('remove', post)">remove</my-button>
  </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>
<style scoped>
.post {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  border: 2px solid teal;
}
.btns{
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 1rem;
}
</style>