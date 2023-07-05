<template>
  <div class="posts" v-show="posts.length > 0">
    <TransitionGroup name="list">
      <post-item v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)" />
    </TransitionGroup>
  </div>
  <div class="posts" v-show="posts.length === 0">
    Empty List
  </div>
</template>
<script>
import PostItem from './PostItem.vue';
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>
<style>
.posts {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  /* transition: all 0.2s ease; */
}

.list-enter-from,
.list-leave-to {
  /* opacity: 0; */
  /* transform: translateX(10px); */
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  /* position: absolute; */
}

</style>