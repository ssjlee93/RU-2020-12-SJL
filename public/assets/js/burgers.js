$(document).ready(function() {
    
    $.ajax("/burgers", {
      type: "GET"
    }).then(function(data) {
      console.log(data);
      var burgers = data.burgers;
      var len = burgers.length;
  
      for (var i = 0; i < len; i++) {
  
        var text = "Devour"
        var elem = $("#not_devoured");
        var klass = "btn-primary devour"
        var icon = "<i class='fas fa-utensils'></i>"
  
        if (burgers[i].devoured) {
          text = "Delete";
          elem = $("#devoured");
          klass="btn-danger delete"
          icon = "<i class='fas fa-trash'></i>"
        }
  
        var new_elem = "<li class='list-group-item text-center my-2'>"+burgers[i].id + ". " +burgers[i].burger_name+"<button type='button' class='btn burger-btn mr-0 vl-auto"+klass+"' data-id='"+burgers[i].id+"'>"+icon + text+"</button></li>";
  
        elem.append(new_elem)
  
      }
    })
  
    $(document).on("click", ".devour", function(event) {
      event.preventDefault();
  
      var burger_id = $(this).data("id");
  
      $.ajax({
        method: "PUT",
        url: "/burgers/" + burger_id,
        dataType:'json',
        contentType: 'application/json'
      }).then(function(data) {
        // reload page to display devoured burger in proper column
        location.reload();
      });
  
    });
  
    $(document).on("click", ".delete", function(event) {
      event.preventDefault();
  
      var burger_id = $(this).data("id");
  
      $.ajax({
        method: "DELETE",
        url: "/burgers/" + burger_id,
      }).then(function(data) {
        console.log("deleted");
        // reload page to display devoured burger in proper column
        location.reload();
      });
  
    });
  
    $(document).on("submit", ".add-burger", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger_name").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/burgers", {
        type: "POST",
        data: JSON.stringify(newBurger),
        dataType:'json',
        contentType: 'application/json'
      }).then(function() {
        console.log("added new burger");
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
  });
  