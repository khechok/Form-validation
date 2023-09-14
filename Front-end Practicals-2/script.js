// first Name
let firstNameInput = document.getElementById("first-name-input");
let firstNameError = document.getElementById("first-name-error");
let emptyfirstNameError = document.getElementById("empty-first-name");

// last name
let lastNameInput = document.getElementById("last-name-input");
let lastNameError = document.getElementById("last-name-error");
let emptyLastNameError = document.getElementById("empty-last-name");

// phone number
let phoneInput = document.getElementById("phone");
let phoneError = document.getElementById("phone-error");
let emptyPhoneError = document.getElementById("empty-phone");

// email
let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");

// password 
let passwordInput = document.getElementById("password")
let passwordError = document.getElementById("password-error")
let emptyPasswordError = document.getElementById("empty-password");

// confirm password
let confirmPasswordInput = document.getElementById("verify-password");
let confirmPasswordError = document.getElementById("verify-password-error")
let emptyconfirmPasswordError = document.getElementById("verify-empty-password");

// submit
let submitButton = document.getElementById("submit-button");

// valid
let validClass = document.getElementsByClassName("valid");
let invalidClass = document.getElementsByClassName("error");

//Password Verification
const passwordVerify = (password) => {
   const regex =
      /^(?=.+[a-z])(?=.+[A_Z])(?=.+[0-9])(?=.+[\$\%\^\&\!@\#\*\(\)\+\=`~\?\>\<]) $/;

   return regex.test(password) && password.length >= 8;
}

// Text verification 
const textVerify = (text) => {
   const regex = /^[a-zA_Z]{3,}$/;
   return regex.test(text);
};
//phone number verification
const phoneVerify = (number) => {
   const regex = /^[0-9]{10}$/;
   return regex.test(number);
   ;
};

// email verification
const emailVerify = (input) => {
   const regex = /^[a-z0-9_]+@[a-z]{3,}\.[a-z\.]{3,}$/;
   return regex.test(input);
};

//for empty input - accepts (input,empty error for that input and other errors)
const emptyUpdate = (
   inputReference, emptyErrorReference, otherErrorReference
) => {
   if (!inputReference.value) {
      //input is null/empty
      emptyErrorReference.classList.remove("hide");
      otherErrorReference.classList.add("hide");
      inputReference.classList.add("error");
   } else {
      //input has some content
      emptyErrorReference.classList.add("hide");
   }
};

// for error styling and displaying error meassage
const errorUpdate = (inputReference, errorReference) => {
   errorReference.classList.remove("hide");
   inputReference.classList.remove("valid");
   inputReference.classList.add("error");

};

//for no errors
const validinput = (inputReference) => {
   inputReference.classList.remove("error");
   inputReference.classList.add("valid");

};

//fisrt name
firstNameInput.addEventListener("input", () => {
   if (textVerify(firstNameInput.value)) {
      //if verification returns true
      firstNameError.classList.add("hide");
      validinput(firstNameInput);
   } else {
      //for false
      errorUpdate(firstNameInput, firstNameError);
      // empty checker
      emptyUpdate(firstNameInput, emptyfirstNameError, firstNameError);
   }
});

// last name
lastNameInput.addEventListener("input", () => {
   if (textVerify(lastNameInput.value)) {
      //if verification returns true
      lastNameError.classList.add("hide");
      validinput(lastNameInput);
   } else {
      //for false
      errorUpdate(lastNameInput, lastNameError);
      // empty checker
      emptyUpdate(LastNameInput, emptyLastNameError, lastNameError);
   }
});

// email
emailInput.addEventListener("input", () => {
   if (emailVerify(emailInput.value)) {
      //if verification returns true
      emailError.classList.add("hide");
      validinput(emailInput);
   } else {
      //for false
      errorUpdate(emailInput, emailError);
      // empty checker
      emptyUpdate(emailInput, emptyEmailError, emailError);
   }
});

//phone Number
phoneInput.addEventListener("input", () => {
   if (phoneVerify(phoneInput.value)) {
      //if verification returns true
      phoneError.classList.add("hide");
      validinput(phoneInput);
   } else {
      //for false
      errorUpdate(phoneInput, phoneError);
      // empty checker
      emptyUpdate(phoneInput, emptyPhoneError, phoneError);
   }
});

//Password
passwordInput.addEventListener("input", () => {
   if (passwordVerify(passwordInput.value)) {
      //if verification returns true
      passwordError.classList.add("hide");
      validinput(passwordInput);
   } else {
      //for false
      errorUpdate(passwordInput, passwordError);
      // empty checker
      emptyUpdate(passwordInput, emptyPasswordError, passwordError);
   }
});

// confirm password
confirmPasswordInput.addEventListener("input", () => {
   if (passwordVerify(confirmPasswordInput.value)) {
      //if verification returns true
      confirmPasswordError.classList.add("hide");
      validinput(confirmPasswordInput);
   } else {
      //for false
      errorUpdate(confirmPasswordInput, confirmPasswordError);
      // empty checker
      emptyUpdate(confirmPasswordInput, emptyConfirmPasswordError, confirmPasswordError);
   }
});
