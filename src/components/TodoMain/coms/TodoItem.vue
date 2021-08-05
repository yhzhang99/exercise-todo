<template>
  <div id="item" :class="{ done: this.todomsg.done }">
    <!-- <i :class="{'iconfont icon-Todo1231' : this.todomsg.done, 'iconfont icon-todo1' : !this.todomsg.done}" @click="changeDone"></i> -->
    <!-- :class="[ iconfont, todomsg.done? icon-Todo1231 : icon-todo1]" -->
    <i
      :class="[
        'iconfont',
        this.todomsg.done ? 'icon-Todo1231' : 'iconfont icon-todo1',
      ]"
      @click="changeDone"
    ></i>
    <p @dblclick="changemsg" :class="{ hide: isEdit }">
      {{ todomsg.tobedone }}
    </p>
    <input
      type="text"
      :class="{ hide: !isEdit }"
      v-foucs="isEdit"
      @blur="inputmsg"
      @keyup.enter="inputmsg"
      v-model="inputStr"
    />
    <i class="iconfont icon-chacha" @click="chaItem"></i>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todomsg: Object,
  },
  data() {
    return {
      isEdit: false,
      inputStr: '',
    };
  },
  methods: {
    chaItem() {
      this.$emit('chaItem', this.todomsg.id);
    },
    changeDone() {
      this.todomsg.done = !this.todomsg.done;
    },
    changemsg() {
      this.isEdit = !this.isEdit;
      this.inputStr = this.todomsg.tobedone;
    },
    inputmsg() {
      this.isEdit = false;
      this.todomsg.tobedone = this.inputStr;
      // console.log(this.inputStr);
      // console.log(this.todomsg.tobedone);
    },
  },
  directives: {
    foucs: {
      update(el, binding) {
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
/* #item p {
    width: 400px;
    height: 70px;
  } */

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

.hide {
  display: none;
}
</style>
