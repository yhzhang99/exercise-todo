<template>
  <div>
    <div id="main">
      <a href="javascript:;" @click="allDone">
        <i class="iconfont icon-todo123"></i>
      </a>
      <input
        type="text"
        @keyup.enter="addItem"
        v-model="tobedone"
        placeholder="What needs to be done?"
      />
    </div>
    <router-view></router-view>
    <todo-info>
      {{ $store.getters.letfItems }}
    </todo-info>
  </div>
</template>

<script>
import TodoInfo from './coms/TodoInfo.vue';
export default {
  name: 'TodoHeader',
  data() {
    return {
      tobedone: '',
      flag: 'all',
    };
  },
  methods: {
    addItem() {
      this.$store.commit('addItem', this.tobedone);
      this.tobedone = '';
    },
    allDone() {
      this.$store.commit('allDone');
    },
  },
  components: {
    TodoInfo,
  },
};
</script>

<style scoped>
@import '//at.alicdn.com/t/font_2720164_6rsa310l29.css';
#main {
  width: 500px;
  height: 70px;
  margin: 0 auto;
  box-shadow: 0 0 2px;
}
a,
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: inherit;
}
a {
  margin: 0 10px 0 10px;
}
input {
  width: 400px;
  height: 50px;
  outline: none;
  border: none;
  margin: 10px 0 0 10px;
  font-size: 24px;
}
</style>
