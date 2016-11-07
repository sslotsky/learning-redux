(function() {
  function ViewModel() {
    this.todos = ko.observableArray([{ title: 'Finish this project' }]);

    this.newTodo = ko.observable('')
    this.addTodo = function() {
      this.todos.push({ title: this.newTodo() })
      this.newTodo('')
    }
  }

  ko.applyBindings(new ViewModel())
})()

