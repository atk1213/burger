// could not get update functional, try different approach!

$(function() {
    $(".change-devoured").on("click", function(event) {
      console.log(this);
      var id = $(this).data("id");
      // var eaten = $(this).data("eaten");
  
      // var eatenState = {
      //   devoured: eaten
      // };
      // console.log("eatenstate"+ eatenState);
      // Send the PUT request.
      $.ajax("/burgers/" + id, {
        type: "PUT",
        // data: eatenState
      }).then(
        function() {
          console.log("changed devoured state to", eaten);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      var newBurger = {
        burger_name: $("#burg").val().trim(""),
        devoured: 0
      };
      console.log(newBurger);
  
      // Send the POST request.
      $.ajax("/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("added burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });