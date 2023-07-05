<template>
  <h1>Posts Page</h1>
  <my-button @click="showDialog">Create post</my-button>

  <my-select v-model="selectedSort" :options="sortTypes"></my-select>
  <my-input v-focus v-model="searchQuery" type="text" placeholder="Search..." />

  <my-dialog v-model:show="dialogVisible">
    <post-form @create="createPost" />
  </my-dialog>
  <div v-if="isPostLoading">Loading...</div>
  <div v-else>
    <post-list :posts="searchPosts" @remove="removePost" />
    <div v-inter="{ fetchMorePosts }" style="height:1rem; background: green;"></div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
  components: {
    PostForm, PostList
  },
  data() {
    return {
      title: '',
      body: '',
      posts: [],
      dialogVisible: false,
      isPostLoading: true,
      sortTypes: [
        { value: 'title', name: 'by name' },
        { value: 'body', name: 'by desc ' },
      ],
      selectedSort: '',
      searchQuery: '',
      page: 0,
      totalPages: 0,
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false;
    },
    showDialog() {
      this.dialogVisible = true;
    },
    removePost(post) {
      this.posts = this.posts.filter(el => el.id != post.id)
    },
    async fetchPosts() {
      this.isPostLoading = true
      try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts?' + new URLSearchParams({
          _limit: '10',
          _page: this.page,
        }));
        const posts = await resp.json()
        this.posts = posts;
        this.totalPages = Math.trunc(resp.headers.get('x-total-count') / 10);
      } catch (e) {
        console.log(e)
        //alert('Posts error')
      } finally {
        this.isPostLoading = false
      }
    },
    async fetchMorePosts() {
      if (this.page < this.totalPages) {
        try {
          const resp = await fetch('https://jsonplaceholder.typicode.com/posts?' + new URLSearchParams({
            _limit: '10',
            _page: this.page,
          }));
          const posts = await resp.json()
          this.posts = [...this.posts, ...posts];
          this.page +=1
        } catch (e) {
          console.log(e)
          //alert('Posts error')
        } finally {
        }
      }
    },
  },
  mounted() {
    this.fetchPosts();

  },
  computed: {
    sortedPosts() {
      const res = [...this.posts.sort((a, b) => a[this.selectedSort]?.localeCompare(b[this.selectedSort]))]
      return res
    },
    searchPosts() {
      return this.sortedPosts.filter(post => post.title.includes(this.searchQuery))
    }
  }
}
</script>

<style lang="scss" scoped></style>