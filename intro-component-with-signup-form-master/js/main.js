"use strict";

const submitBtn = document.querySelector(".submitBtn");
const inputFields = document.querySelectorAll("input");
const errorMsg = document.querySelectorAll(".error");
const errorEmail = document.querySelector(".error-status-email");

const formatText = function (str) {
  console.log(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase().trim());
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase().trim();
};

const checkEmail = function (email) {
  const emailForm = email.toLowerCase().charAt(0).toUpperCase() + email.slice(1);
  const re = /\S+@\S+\.\S+/;
  return re.test(emailForm);
};

const displayBorder = (inpEle) => {
  inpEle.style.border = "1px solid red";
  inpEle.removeAttribute("placeholder");
};

const hideBorder = (inpEle) => {
  inpEle.style.border = "1px solid var(--blue)";
};

const displayError = function (element, inpEle) {
  errorMsg.forEach((ele) => {
    ele.classList.contains(`error-status-${element}`) ? ele.classList.remove("hidden") : "";
  });
  displayBorder(inpEle);
};

const hideError = function (element, inpEle) {
  errorMsg.forEach((ele) => {
    ele.classList.contains(`error-status-${element}`) ? ele.classList.add("hidden") : "";
  });
  hideBorder(inpEle);
};

const checkInput = function () {
  inputFields.forEach((inp, i) => {
    // Check if input is empty
    if (!inp.value) {
      displayError(inp.id, inp);
    }
    // Check if input is text and format input + hiding error
    else if (inp.type === "text") {
      formatText(inp.value);
      hideError(inp.id, inp);
    }
    // Check if input is email and format input + hiding error + errortext if not mail
    else if (inp.type === "email") {
      checkEmail(inp.value) ? hideError(inp.id, inp) : displayError(inp.id, inp);
      errorEmail.querySelector(".input-error-message").textContent = "Look's like this is not an email!";
    }
    // Input is valid hide all Errors
    else {
      hideError(inp.id, inp);
      console.log(i);
      console.log(inp[i]);
      console.log(inp[i].value);
    }
    // return {firstName: inp[i].value}
  });
};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  checkInput();
});

///////////////////////////////Backup///////////////////////////////////////

// const submitBtn = document.querySelector(".submitBtn");
// const inputFields = document.querySelectorAll("input");
// const errorMsg = document.querySelectorAll(".error");
// const errorEmail = document.querySelector(".error-status-email");

// const formatText = function (str) {
//   const out = str.toLowerCase().charAt(0).toUpperCase() + str.slice(1).trim();
//   console.log(out);
// };

// const checkEmail = function (email) {
//   const emailForm = email.toLowerCase().charAt(0).toUpperCase() + email.slice(1);
//   const re = /\S+@\S+\.\S+/;
//   return re.test(emailForm);
// };

// const displayError = function (element) {
//   errorMsg.forEach((ele) => {
//     ele.classList.contains(`error-status-${element}`) ? ele.classList.remove("hidden") : "";
//   });
// };

// const hideError = function (element) {
//   errorMsg.forEach((ele) => {
//     ele.classList.contains(`error-status-${element}`) ? ele.classList.add("hidden") : "";
//   });
// };

// const displayBorder = (inpEle) => {
//   inpEle.style.border = "1px solid red";
//   inpEle.removeAttribute("placeholder");
// };

// const hideBorder = (inpEle) => {
//   inpEle.style.border = "1px solid var(--blue)";
// };

// const checkInput = function () {
//   inputFields.forEach((inp) => {
//     // Check if input is empty
//     if (!inp.value) {
//       displayError(inp.id);
//       // Adding red border and clearing placeholders
//       displayBorder(inp);
//       // Check if email input is valid and hide/show error
//     } else if (inp.type === "text") {
//       formatText(inp.value);
//       hideError(inp.id);
//       hideBorder(inp);
//     } else if (inp.type === "email") {
//       checkEmail(inp.value) ? hideError(inp.id) : displayError(inp.id);
//       // checkEmail(inp.value) ? console.log("BANANE") : console.log("ORANGE");
//       errorEmail.querySelector(".input-error-message").textContent = "Look's like this is not an email!";
//       hideBorder(inp);
//     } else {
//       hideError(inp.id);
//       hideBorder(inp);
//     }
//   });
// };

// submitBtn.addEventListener("click", function () {
//   checkInput();
// });
