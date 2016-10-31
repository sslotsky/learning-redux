$(function() {
  var $message = $('div#app p#message')

  var updateMessage = function(message) {
    $message.text(message)
  }

  $('div#app input[name=message]').on('keyup', function(e) {
    updateMessage(e.target.value)
  })
})
