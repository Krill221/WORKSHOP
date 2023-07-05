import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import router from '@/router/router.js';
import directives from '@/directives';
import store from '@/store';

const app = createApp(App)
components.forEach(c => {
  app.component(c.name, c)
});
directives.forEach(d => {
  app.directive(d.name, d)
});

app.use(store).use(router).mount('#app')