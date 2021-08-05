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
    <todo-item
      v-for="(item, index) in newTodoData"
      :key="index"
      :todomsg="item"
      @chaItem="chaItem"
    ></todo-item>
    <todo-info
      @changeAll="changeAll"
      @changeActive="changeActive"
      @changeCompleted="changeCompleted"
      @clearCom="clearCom"
    >
      {{ letfItems }}
    </todo-info>
  </div>
</template>

<script>
import todoStorage from '../todoStorage';
import TodoItem from './coms/TodoItem.vue';
import TodoInfo from './coms/TodoInfo.vue';
// let id = 0;
export default {
  name: 'TodoHeader',
  data() {
    return {
      todoData: todoStorage.fetch(),
      tobedone: '',
      id: 0,
      flag: 'all',
      sign: true,
    };
  },
  methods: {
    addItem() {
      if (this.todoData[this.todoData.length - 1]) {
        this.id = this.todoData[this.todoData.length - 1].id + 1;
      }
      this.todoData.push({
        id: this.id++,
        done: false,
        tobedone: this.tobedone,
      });
      this.tobedone = '';
    },
    allDone() {
      for (let i in this.todoData) {
        this.todoData[i].done = this.sign;
      }
      this.sign = !this.sign;
    },
    chaItem(id) {
      let index;
      function getId(item) {
        return item.id === id;
      }
      index = this.todoData.findIndex(getId);
      this.todoData.splice(index, 1);
    },
    changeAll() {
      this.flag = 'all';
    },
    changeActive() {
      this.flag = 'active';
    },
    changeCompleted() {
      this.flag = 'completed';
    },
    clearCom() {
      // for (let i in this.todoData) {
      //   if (this.todoData[i].done == 1) {
      //     this.todoData.splice(i, 1);
      //     i--;
      //   }
      // }
      for (let i = 0; i < this.todoData.length; i++) {
        if (this.todoData[i].done === true) {
          this.todoData.splice(i, 1);
          i--;
        }
      }
    },
  },
  computed: {
    newTodoData() {
      if (this.flag === 'all') {
        return this.todoData;
      } else if (this.flag === 'active') {
        return this.todoData.filter((item) => item.done === false);
      }
      return this.todoData.filter((item) => item.done === true);
    },

    letfItems() {
      let num = 0;
      for (let i in this.todoData) {
        if (this.todoData[i].done === false) {
          num++;
        }
      }
      return num;
    },
    // leftItems: function () {

    //   if(this.todoData.filter((item) => item.done == 0)) {
    //     this.left++;
    //   }
    //   else this.left--;
    //   return this.left
    // },

    // leftItems: function () {
    //   var left = 0;
    //   for (let key in this.todoData) {
    //     if (this.keytodoData[key].done == 0) {
    //       left++;
    //     }
    //     return left;
    //   }
  },
  watch: {
    todoData: {
      handler: function (todoData) {
        todoStorage.save(todoData);
      },
      deep: true,
    },
  },
  components: {
    TodoItem,
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
/*获得焦点之后取掉默认的蓝色选中框*/
/* input:focus {
                                    border-radius: 5px;
                                    border: 1px solid #ccc;
                                  } */
</style>
