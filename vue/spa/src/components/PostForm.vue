<template>
  <form @submit.prevent>
    <my-input v-focus v-model="post.title" type="text" placeholder="title" />
    <my-input v-model="post.desc" type="text" placeholder="desc" />
    <my-button class="submit" @click="createPost">create</my-button>
  </form>
</template> 
<script>
export default {
  data() {
    return {
      post: {
        title: '',
        desc: '',
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post)
      this.post = {
        title: '',
        desc: ''
      }
    },
  },
}
</script>
<style>
form {
  display:flex;
  flex-direction: column;
  align-items:stretch;
  gap: 0.4rem;
  margin: 0rem;
}
.submit{
  align-self: flex-end;
}
</style>