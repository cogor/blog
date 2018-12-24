import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('./views/Posts.vue'),
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('./views/Contacts.vue'),
    },
    {
      path: '/post/:post',
      name: 'post',
      component: () => import('./views/Post.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
});
