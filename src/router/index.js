import Home from '@/components/Home';
import Login from '@/components/Login';
import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login/:bankId',
      name: 'Login',
      component: Login,
    },
  ],
});
