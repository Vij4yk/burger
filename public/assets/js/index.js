$(document).ready(function() {
  // submit btn click event
  // $('#submit-btn').on('click', function(e) {
  //   e.preventDefault();
  //   const name = {
  //     name: $('#create-burger')
  //       .val()
  //       .trim()
  //   };

  // adds and displays a new burger to the db
  //   createBurger(name);
  // });

  $('#submit-btn').keyup(function(e) {
    if (e.keyCode === 13) {
      console.log('keycode is 13');
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
  $('.update-btn').on('click', function() {
    // creates an object to contain our id and devoured status. done this way to easily pass into the sql query
    const updateById = {
      id: {
        id: $(this).attr('data-id')
      },
      devoured: { devoured: 1 }
    };

    updateBurger(updateById);
  });

  // checks the value of devoured and updates accordingly.
  // function checkDevoured(input) {
  //   return input == 0 ? 1 : 0;
  // }

  function updateBurger(input) {
    // Send the PUT request.
    $.ajax('/api/burgers/' + input.id.id, { type: 'PUT', data: input }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  }
  //${data.id}. ${value.name}
  // posts the burger to the db, and displays it
  function createBurger(value) {
    $.post('/api/burgers', value, function(data) {
      $('#burger-container').append(`
      <div class="mb-3">
        <div class="border rounded p-2 mr-4 d-inline"><p class="d-inline">${
          data.id
        }. ${value.name}</p></div> 
        <button type="button" class="btn btn-primary update-btn" data-id="${
          data.id
        }" data-burger_name="${value.name}" data-devoured="0">Devour it</button>
      </div>
      `);
    });
  }
});
