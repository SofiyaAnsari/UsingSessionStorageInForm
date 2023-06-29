"use strict";

$(document).ready(() => {
  // displaying values stored in session storage
  $("#email").text(sessionStorage.getItem("email"));
  $("#phone").text(sessionStorage.getItem("phone"));
  $("#postal").text(sessionStorage.getItem("postal"));
  $("#dob").text(sessionStorage.getItem("dob"));

  $("#back").click(() => {
    window.history.back(); //it will redirect to the previous page using history object
  });
});
