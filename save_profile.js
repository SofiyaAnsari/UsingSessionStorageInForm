"use strict";

//This function is used to check whether the date is valid or not
const isDate = (text) => {
  if (!/^[01]?\d\/[0-3]\d\/\d{4}$/.test(text)) {
    return false;
  }

  const index1 = text.indexOf("/");
  const index2 = text.indexOf("/", index1 + 1);
  const month = parseInt(text.substring(0, index1));
  const day = parseInt(text.substring(index1 + 1, index2));
  //checking if the month is less than or greater than 0
  if (month < 1 || month > 12) {
    return false;
  } else {
    //using the switch statement to check the days in a particular month
    switch (month) {
      case 2:
        return day > 28 ? false : true;
      case 4:
      case 6:
      case 9:
      case 11:
        return day > 30 ? false : true;
      default:
        return day > 31 ? false : true;
    }
  }
};

$(document).ready(() => {
  //event listener is added with the id save, so when the save button is clicked it will check whether the inputs are valid or not
  $("#save").click(() => {
    $("span").text("");
    let isValid = true;
    const email = $("#email").val();
    const phone = $("#phone").val();
    const postal = $("#postal").val();
    const dob = $("#dob").val();

    //Will display error message for each input box if it is not valid
    if (email === "" || !email.match(/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/)) {
      isValid = false;
      $("#email").next().text("Please enter a valid email.");
    }

    if (phone === "" || !phone.match(/^\d{3}-\d{3}-\d{4}$/)) {
      isValid = false;
      $("#phone")
        .next()
        .text("Please enter a phone number in NNN-NNN-NNNN format.");
    }

    if (
      postal === "" ||
      !postal.match(
        /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i
      )
    ) {
      isValid = false;
      $("#postal").next().text("Please enter a valid postal code.");
    }

    if (dob === "" || !isDate(dob)) {
      isValid = false;
      $("#dob").next().text("Please enter a valid date in MM/DD/YYYY format.");
    }

    //if the va;ues are valid or true then the values are stored in the session storage.
    if (isValid) {
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("phone", phone);
      sessionStorage.setItem("postal", postal);
      sessionStorage.setItem("dob", dob);
      window.location.href = "profile.html"; //redirects the user to profile.html after successfully validating and storing its data
    }

    $("#email").focus();
  });

  $("#email").focus();
});
