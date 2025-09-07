function formValidation() {
  var uname = document.registration.username;
  var upass = document.registration.pass;
  var ufname = document.registration.firstname;
  var ulname = document.registration.lastname;
  var uemail = document.registration.email;
  var uadd = document.registration.address;
  var ucountry = document.registration.country;
  var uzip = document.registration.zip;
  var uphone = document.registration.pnum;
  var ueducation = document.registration.edlevel;

  if (allLetter(ufname)) {
    if (allLetter(ulname)) {
      if (ValidateEmail(uemail)) {
        if (phoneValidation(uphone)) {
          if (educationValidation(ueducation)) {
            if (alphanumeric(uadd)) {
              if (countryselect(ucountry)) {
                if (allnumeric(uzip)) {
                  alert("Form Successfully Validated");
                  window.location.href = "/public/about.html";
                  return false;
                }
              }
            }
          }
        }
      }
    }
  }
  return false;
}

function username_validation(uname, min, max) {
  var uname_len = uname.value.length;
  if (uname_len == 0 || uname_len >= max || uname_len < min) {
    alert(
      "Username should not be empty / length be between " + min + " to " + max
    );
    uname.focus();
    return false;
  }
  return true;
}
function pass_validation(upass, min, max) {
  var upass_len = upass.value.length;
  if (upass_len == 0 || upass_len >= max || upass_len < min) {
    alert(
      "Password should not be empty / length be between " + min + " to " + max
    );
    upass.focus();
    return false;
  }
  return true;
}
function allLetter(inputtxt) {
  var letters = /^[A-Za-z]+$/;
  if (inputtxt.value.match(letters)) {
    return true;
  } else {
    alert(inputtxt.labels[0].innerHTML + " must have alphabet characters only");
    inputtxt.focus();
    return false;
  }
}
function alphanumeric(inputtxt) {
  var letterNumber = /^[0-9a-zA-Z\s]+$/;
  if (inputtxt.value.match(letterNumber)) {
    return true;
  } else {
    alert("Address must have alphanumeric characters only");
    inputtxt.focus();
    return false;
  }
}
function countryselect(ucountry) {
  if (ucountry.value == "") {
    alert("Select your country from the list");
    ucountry.focus();
    return false;
  } else {
    return true;
  }
}
function allnumeric(inputtxt) {
  var numbers = /^[0-9]+$/;
  if (inputtxt.value.match(numbers)) {
    return true;
  } else {
    alert(inputtxt.labels[0].innerHTML + " must have numeric characters only");
    inputtxt.focus();
    return false;
  }
}

function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
}

function phoneValidation(uphone) {
  var phoneno = /^\d{10}$/;
  if (uphone.value.match(phoneno)) {
    return true;
  } else {
    alert("Phone number must be exactly 10 digits");
    uphone.focus();
    return false;
  }
}

function educationValidation(ueducation) {
  if (ueducation.value == "") {
    alert("Select your education level from the list");
    ueducation.focus();
    return false;
  } else {
    return true;
  }
}
