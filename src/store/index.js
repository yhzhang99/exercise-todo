import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoData: [],
    tobedone: '',
    id: 0,
    sign: true,
  },
  mutations: {
    addItem(state, tobedone) {
      if (tobedone != '' && tobedone != ' ') {
        state.todoData.push({
          id: state.id++,
          done: false,
          tobedone: tobedone,
          isEdit: false,
        });
      }
    },
    chaItem(state, id) {
      let index;
      function getId(item) {
        return item.id === id;
      }
      index = state.todoData.findIndex(getId);
      state.todoData.splice(index, 1);
    },
    allDone(state) {
      for (let i in state.todoData) {
        state.todoData[i].done = state.sign;
      }
      state.sign = !state.sign;
    },
    clearCom(state) {
      for (let i = 0; i < state.todoData.length; i++) {
        if (state.todoData[i].done === true) {
          state.todoData.splice(i, 1);
          i--;
        }
      }
    },
    inputMsg(state, [index, inputStr]) {
      state.todoData[index].tobedone = inputStr;
    },
  },
  actions: {},
  getters: {
    letfItems(state) {
      let num = 0;
      for (let i in state.todoData) {
        if (state.todoData[i].done === false) {
          num++;
        }
      }
      return num;
    },
  },
  modules: {},
});
