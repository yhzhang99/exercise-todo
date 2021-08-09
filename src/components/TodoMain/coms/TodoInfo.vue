<template>
  <div id="info" v-if="$store.state.todoData[0]">
    <div id="left">
      <slot></slot>
      items left
    </div>
    <div id="wrap">
      <router-link to="/TodoItem/all">All</router-link>
      <router-link to="/TodoItem/active">Active</router-link>
      <router-link to="/TodoItem/competed">Competed</router-link>
    </div>
    <a href="javascript:;" id="right" @click="clearCom" v-if="isCompeted"
      >Clear completed</a
    >
    <a href="javascript:;" id="right" v-else></a>
  </div>
</template>

<script>
export default {
  name: 'TodoInfo',
  data() {
    return {};
  },
  methods: {
    clearCom() {
      this.$store.commit('clearCom');
    },
  },
  computed: {
    isCompeted() {
      for (let i in this.$store.state.todoData) {
        if (this.$store.state.todoData[i].done === true) {
          return true;
        }
      }
      return false;
    },
  },
};
</script>

<style scoped>
#info {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  height: 50px;
  line-height: 50px;
  padding: 0 10px 0 10px;
  margin: 0 auto;
  box-shadow: 0 0 5px;
  font-size: 12px;
  color: #777777;
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
  padding: 10px;
}

#right {
  display: block;
  width: 115px;
  padding: 0;
}
.router-link-active {
  border: 1px solid #ead7d7;
  text-decoration: underline;
}
</style>
