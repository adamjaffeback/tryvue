new Vue({
  el: '#app',
  data: {
    newTodo: undefined,
    todos: [],
  },
  methods: {
    addTodo: function () {
      console.log(this);
      this.todos.push(this.newTodo);
      this.newTodo = undefined;
    },
    remove: function (event) {
      this.todos = this.todos.filter(todo => todo !== event.target.innerText);
    },
  },
});
