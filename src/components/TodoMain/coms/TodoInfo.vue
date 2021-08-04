<template>
  <div id="info">
    <div id="left">
      <slot></slot>
      items left
    </div>
    <div id="wrap">
      <a
        href="javascript:;"
        :class="[index === 1 ? 'now' : '']"
        @click="changeAll"
        >All</a
      >
      <a
        href="javascript:;"
        :class="[index === 2 ? 'now' : '']"
        @click="changeActive"
        >Active</a
      >
      <a
        href="javascript:;"
        :class="[index === 3 ? 'now' : '']"
        @click="changeCompleted"
        >Competed</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoInfo',
  data() {
    return {
      index: 1,
    };
  },
  methods: {
    changeAll() {
      this.index = 1;
      this.$emit('changeAll');
    },
    changeActive() {
      this.index = 2;
      this.$emit('changeActive');
    },
    changeCompleted() {
      this.index = 3;
      this.$emit('changeCompleted');
    },
  },
};
</script>

<style scoped>
#info {
  display: flex;
  align-items: center;
  justify-content: left;
  width: 500px;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  box-shadow: 0 0 5px;
  font-size: 12px;
  color: #777777;
}
/* #wrap {
        width: 200px;
        height: 50px;
      } */
#left {
  margin-left: 10px;
  margin-right: 70px;
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
  margin: 10px;
}
.now {
  border: 1px solid #ead7d7;
}
</style>
