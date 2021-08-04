<template>
  <div>
    <todo-header></todo-header>
    <todo-main></todo-main>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoFooter from './components/TodoFooter.vue';
import TodoMain from './components/TodoMain/TodoMain.vue';

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoFooter,
    TodoMain,
  },
};
</script>
