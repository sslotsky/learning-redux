(function() {
  function ViewModel() {
    this.message = ko.observable("What a wonderful day!")
  }

  ko.applyBindings(new ViewModel())
})()

