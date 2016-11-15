$(function() {
  var $newTodo = $('div#app span#creating-todo')
  var $input = $('div#app form#new-todo input[name=creating-todo]')
  var $todoList = $('div#app ul')

  var updateNewTodo = function(todo) {
    $newTodo.text(todo)
  }

  $input.on('keyup', function(e) {
    updateNewTodo(e.target.value)
  })

  $('div form#new-todo').on('submit', function(e) {
    e.preventDefault()
    const todoText = $input.val()
    const $todo = $('<li>' + todoText + '</li>')
    $todoList.append($todo)
    $input.val('')
  });
})
