const todoApp = new Vue({
  el: '#app',
  data: {
    newTodo: undefined,
    todos: [],
  },
  methods: {
    addTodo: function () {
      this.todos.push({text: this.newTodo});
      this.newTodo = '';
    },
    remove: function (event) {
      const deletionText = event.target
                                .parentElement.parentElement
                                .innerText.slice(0, -7);
      this.todos = this.todos.filter(todo => todo.text !== deletionText);
    },
  },
});
