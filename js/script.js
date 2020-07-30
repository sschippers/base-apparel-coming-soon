// JavaScript Document

function validateEmail(email) {
  var teststring = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return teststring.test(email);
}

function validate() {
  var email = $("#emailadr").val();

  if (validateEmail(email)) {
    $("#error").animate({opacity: "0"}, 100);
	$("#emailform").css("border-color", "hsl(0, 36%, 70%)");
	$("#mailerror").css("display", "none");
	alert("Email is valid");
  } else {
    $("#error").animate({opacity: "100"}, 3000);
    $("#emailform").animate({borderColor: "red"}, 3000);
    $("#emailform").css("display", "block");
	$("#mailerror").effect("shake");
  }
  return false;
}

$("#submit").on("click", validate);
$(document).on('keypress',function(e) {
    if(e.which == 13 && $("#emailadr").is(":focus")) {
        validate();
    }
});