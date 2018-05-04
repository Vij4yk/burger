$(document).ready(function() {
  // sends new burger to the db
  $('#submit-btn').keyup(function(e) {
    if (e.keyCode === 13) {
      const name = {
        name: $('#submit-btn')
          .val()
          .trim()
      };

      // adds and displays a new burger to the db
      createBurger(name);
      $(this).val('');
    }
  });

  // devoured btn click event
  $(document).on('click', '.devour-btn', function() {
    // creates an object to contain our id and devoured status. done this way to easily pass into the sql query
    const updateById = {
      id: { id: $(this).attr('data-id') },
      devoured: { devoured: 1 }
    };
    updateBurger(updateById);
  });

  function updateBurger(input) {
    // Send the PUT request.
    $.ajax('/api/burgers/' + input.id.id, { type: 'PUT', data: input }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  }

  // posts the burger to the db, and displays it
  function createBurger(value) {
    $.post('/api/burgers', value, function(data) {
      $('#burger-container').append(`
      <div class="btn btn-primary devour-btn mb-3 d-block" data-id="${
        data.id
      }" data-burger_name="${value.name}" data-devoured="0">
        <p>${data.id}. ${value.name} <span class="badge badge-light">Devour it</span></p>
      </div> 
      `);
    });
  }
});
