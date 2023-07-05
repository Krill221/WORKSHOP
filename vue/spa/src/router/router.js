
import Main from '../pages/Main.vue'
import Posts from '../pages/Posts.vue'
import PostsWithStore from '../pages/PostsWithStore.vue'
import PostsWithComposition from '../pages/PostsWithComposition.vue'
import Post from '../pages/Post.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: Posts,
  },
  {
    path: '/posts/:id',
    component: Post,
  },
  {
    path: '/store',
    component: PostsWithStore,
  },
  {
    path: '/hooks',
    component: PostsWithComposition,
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()  
})

export default router;

