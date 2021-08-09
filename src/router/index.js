import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import TodoItem from '../components/TodoMain/coms/TodoItem';

const routes = [
  { path: '/', redirect: '/TodoItem/all' },
  {
    path: '/TodoItem/:flag',
    component: TodoItem,
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
