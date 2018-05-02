$(document).ready(function() {
  $('#submit-btn').on('click', function(e) {
    e.preventDefault();
    makePost({
      name: $('#create-burger')
        .val()
        .trim()
    });
  });

  function makePost(value) {
    $.post('/api/burgers', value, function(data) {
      // create div with p tag and button for new burger
    });
  }
});
