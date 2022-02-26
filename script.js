$(document).ready(function() {



    // HOMEPAGE

    // button to open the 'add petitions' form on index page

    $("#showPetitionForm").click(function() {
      $(".addPetitionForm").toggle();
    });


    //validate the form to add a petition on the index page

    $("#addPetition").click(function(event) {
      var pTitle = $("#pTitle").val();
      var pDescription = $("#pDescription").val();
      var pEmail = $("#pEmail").val();
      var pPassword = $("#pPassword").val();


      if (pTitle == "") {
        $("#pTitle").addClass("is-invalid");
        $(".err").text("Field required");
        event.preventDefault();
      }else {
        $("#pTitle").removeClass("is-invalid");
      }

      if (pDescription == "") {
        $("#pDescription").addClass("is-invalid");
        $(".err").text("Field required");
        event.preventDefault();
      }else {
        $("#pDescription").removeClass("is-invalid");
      }

      if (pEmail == "") {
        $("#pEmail").addClass("is-invalid");
        $(".err").text("Field required");
        event.preventDefault();
      }else {
        $("#pEmail").removeClass("is-invalid");
      }

      if (pPassword == "") {
        $("#pPassword").addClass("is-invalid");
        $(".err").text("Field required");
        event.preventDefault();
      }else {
        $("#pPassword").removeClass("is-invalid");
      }


    })







  //LOGIN PAGE
  //login form validation

  $("#submit").click(function(event) {

    var email = $("#email").val();
    var password = $("#password").val();

    if (email == "") {
      $("#email").addClass("is-invalid");
      $(".errEmail").text("Field required");
      event.preventDefault();
    } else if (IsEmail(email) == false) {
      $("#email").addClass("is-invalid");
      $(".errEmail").text("Enter a valid email");
    }else {
      $("#email").removeClass("is-invalid");
    }

    //check if password field is empty or right format, if not show error message
    if (password == "") {
      $("#password").addClass("is-invalid");
      $(".errPsw").text("Field required");
      event.preventDefault();
    } else if (isPassword(password) == false) {
      $("#password").addClass("is-invalid");
      $(".errPsw").text("Password must be at least 8 characters, contain a number and an uppercase letter");
      event.preventDefault();
    }else {
      $("#password").removeClass("is-invalid");
    }


  })




  //SIGN UP PAGE
  //sign up form validation

  $("#signUp").click(function() {

    var name = $("#name").val();
    var lastName = $("#last-name").val();
    var signUpEmail = $("#signUp-email").val();
    var signUpPsw = $("#signUp-psw").val();

    if (name == "") {
      $("#name").addClass("is-invalid");
      $(".errName").text("Field required");
      event.preventDefault();
    }else{
      $("#name").removeClass("is-invalid");
    }

    if (lastName == "") {
      $("#last-name").addClass("is-invalid");
      $(".errLastName").text("Field required");
      event.preventDefault();
    }else{
      $("#last-name").removeClass("is-invalid");
    }

    if (signUpEmail == "") {
      $("#signUp-email").addClass("is-invalid");
      $(".errEmail").text("Field required");
      event.preventDefault();
    } else if (IsEmail(signUpEmail) == false) {
      $("#signUp-email").addClass("is-invalid");
      $(".errEmail").text("Enter a valid email");
    }else{
      $("#signUp-email").removeClass("is-invalid");
    }


    if (signUpPsw == "") {
      $("#signUp-psw").addClass("is-invalid");
      $(".errPsw").text("Field required");
      event.preventDefault();
    } else if (isPassword(signUpPsw) == false) {
      $("#signUp-psw").addClass("is-invalid");
      $(".errPsw").text("Password must be at least 8 characters, contain a number and an uppercase letter");
      event.preventDefault();
    }else {
      $("#signUp-psw").removeClass("is-invalid");
    }


  })



  //validate email against the regular expression
  function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
      return false;
    } else {
      return true;
    }
  }


  //validate password against the regular expression
  function isPassword(password) {
    var regexPsw = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (!regexPsw.test(password)) {
      return false;
    } else {
      return true;
    }
  }







})
