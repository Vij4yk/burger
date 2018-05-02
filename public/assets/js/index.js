$(document).ready(function() {
  // submit btn click event
  $('#submit-btn').on('click', function(e) {
    e.preventDefault();
    const name = {
      name: $('#create-burger')
        .val()
        .trim()
    };
    createBurger(name);
  });

  // update btn click event
  $('.update-btn').on('click', function() {
    const updateById = {
      id: { id: $(this).attr('data-id') },
      devoured: { devoured: checkDevoured($(this).attr('data-devoured')) }
    };

    updateBurger(updateById);
  });

  // checks the value of devoured and updates accordingly.
  function checkDevoured(input) {
    return input == 0 ? 1 : 0;
  }

  function updateBurger(input) {
    // Send the PUT request.
    $.ajax('/api/burgers/' + input.id.id, { type: 'PUT', data: input }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  }

  function createBurger(value) {
    $.post('/api/burgers', value, function(data) {
      // console.log(data);
      $('#burger-container').append(`
        <div>
          <p class="d-inline">${data.id}. ${value.name}</p>
          <button>Devour it</button>
        </div>
      `);
    });
  }
});
