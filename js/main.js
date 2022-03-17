// FORM VALIDATION:

let fnameInput = document.getElementById('fname');
let lnameInput = document.getElementById('lname');
let fnameErrMsg = document.getElementById('fname-err-msg');
let lnameErrMsg = document.getElementById('lname-err-msg');
let courseInput = document.getElementById('course');
let courseErrMsg = document.getElementById('course-err-msg');

let submitForm = document.getElementById('myform');

submitForm.addEventListener('submit', function (e) {

  let err = 0;

  if ( fnameInput.value == "") {
    fnameInput.style.border = "2px solid red";
    fnameErrMsg.innerHTML = "Please enter your first name";
    err++;
  } else {
    fnameInput.style.border = "";
    fnameErrMsg.innerHTML = "";
  }

  if ( lnameInput.value == "") {
    lnameInput.style.border = "2px solid red";
    lnameErrMsg.innerHTML = "Please enter your last name";
    err++;
  } else {
    lnameInput.style.border = "";
    lnameErrMsg.innerHTML = "";
  }

  if (courseInput.value == "") {
    courseInput.style.border = "2px solid red";
    courseErrMsg.innerHTML = "Please select a course";
    err++;
  } else {
    courseInput.style.border = "";
    courseErrMsg.innerHTML = "";
  }

  if (err > 0) {
    e.preventDefault();
  }

});