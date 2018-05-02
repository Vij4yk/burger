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
      console.log(data);
      $('#burger-container').append(`
        <div>
          <p class="d-inline">${data.id}. ${value.name}</p>
          <button>Devour it</button>
        </div>
      `);
    });
  }
});
