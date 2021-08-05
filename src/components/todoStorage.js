const STORAGE_KEY = 'todoStorage';
export default {
  fetch: function () {
    return window.JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
  },
  // fetchId: function () {
  //   var todoData = window.JSON.parse(
  //     window.localStorage.getItem(STORAGE_KEY) || '[]'
  //   );
  //   var id = [];
  //   for (let i = 0; i < todoData.length; i++) {
  //     id.push(todoData[i].id);
  //   }
  //   console.log(Math.max(id));
  //   console.log(id);
  //   return Math.max(id);
  // },
  save: function (items) {
    window.localStorage.setItem(STORAGE_KEY, window.JSON.stringify(items));
  },
};
