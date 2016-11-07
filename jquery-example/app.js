$(function() {
  var $message = $('div#app span#creating-todo')
  var $input = $('div#app form#new-todo input[name=creating-todo]')
  var $todoList = $('div#app ul')

  var updateMessage = function(message) {
    $message.text(message)
  }

  $input.on('keyup', function(e) {
    updateMessage(e.target.value)
  })

  $('div form#new-todo').on('submit', function(e) {
    e.preventDefault()
    const todoText = $input.val()
    const $todo = $('<li>' + todoText + '</li>')
    $todoList.append($todo)
    $input.val('')
  });
})
