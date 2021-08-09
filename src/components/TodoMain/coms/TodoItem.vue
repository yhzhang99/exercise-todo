<template>
  <div>
    <div
      id="item"
      :class="{ done: item.done }"
      v-for="(item, index) in newTodoData"
      :key="index"
    >
      <i
        :class="[
          'iconfont',
          item.done ? 'icon-Todo1231' : 'iconfont icon-todo1',
        ]"
        @click="changeDone(item)"
      ></i>
      <p @dblclick="changeMsg(item)" v-if="!item.isEdit">
        {{ item.tobedone }}
      </p>
      <input
        type="text"
        v-if="item.isEdit"
        v-model="inputStr"
        v-foucs="item.isEdit"
        @keyup.enter="inputMsg(item, index)"
        @blur="inputMsg(item, index)"
      />
      <i class="iconfont icon-chacha" @click="chaItem(item.id)"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  data() {
    return {
      inputStr: '',
      flag: '',
    };
  },
  methods: {
    chaItem(id) {
      this.$store.commit('chaItem', id);
    },
    changeDone(item) {
      item.done = !item.done;
    },
    changeMsg(item) {
      item.isEdit = true;
      this.inputStr = item.tobedone;
    },
    inputMsg(item, index) {
      item.isEdit = false;
      this.$store.commit('inputMsg', [index, this.inputStr]);
    },
  },
  watch: {
    $route(to) {
      this.flag = to.params.flag;
    },
  },
  computed: {
    newTodoData() {
      if (this.flag === 'active') {
        return this.$store.state.todoData.filter((item) => item.done === false);
      } else if (this.flag === 'competed') {
        return this.$store.state.todoData.filter((item) => item.done === true);
      }
      return this.$store.state.todoData;
    },
  },
  directives: {
    foucs: {
      inserted(el, binding) {
        if (binding.value) {
          el.focus();
        }
      },
    },
  },
};
</script>

<style scoped>
@import '//at.alicdn.com/t/font_2720164_6rsa310l29.css';
#item {
  position: relative;
  width: 500px;
  height: 70px;
  line-height: 70px;
  margin: 0 auto;
  padding: 0 40px 0 40px;
  box-shadow: 0 0 2px;
  box-sizing: border-box;
}

.icon-todo1,
.icon-Todo1231 {
  position: absolute;
  left: 10px;
}

.icon-chacha {
  display: none;
  position: absolute;
  right: 10px;
  top: 0;
}
#item:hover .icon-chacha {
  display: inline;
}

.done {
  color: #d9d9d9;
  text-decoration: line-through;
}

p {
  margin: 0;
  width: 200px;
}

input {
  position: absolute;
  top: 0px;
  width: 400px;
  height: 50px;
  outline: none;
  border: none;
  margin: 10px 0 0 10px;
  font-size: 24px;
}
</style>
