const formElement = document.getElementById("details-form");
var alphaExp = /^[a-zA-Z]+$/;
var emailExp = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
var passExp = RegExp(
  "^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$"
);
// *.!@$%^&(){}[]:;<>,.?/~_+-=|;
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  for (let i = 0; i < formElement.elements.length - 1; i++) {
    if (formElement[i].value.trim() === "") {
      alert("Empty Input Fields are present.");
      return;
    }

    if (
      formElement[i].id === "userid" &&
      (formElement[i].value.length < 5 || formElement[i].value.length > 12)
    ) {
      alert("Invalid Userid");
    }

    if (
      formElement[i].id === "name" &&
      (!formElement[i].value.match(alphaExp) ||
        formElement[i].value.length < 11)
    ) {
      alert("Name is invalid");
      return;
    }

    if (
      formElement[i].id === "email" &&
      !formElement[i].value.match(emailExp)
    ) {
      alert("Invalid Email Id!!");
      return;
    }

    if (
      formElement[i].id === "password" &&
      !passExp.test(formElement[i].value)
    ) {
      alert("Password is Invalid");
      return;
    }
  }

  alert("Successful Registration");
});


/* This JavaScript code is designed to validate a registration form. Let's go through it step-by-step, explaining each part:

### Line-by-Line Explanation

```javascript
const formElement = document.getElementById("details-form");
```
- `const formElement = document.getElementById("details-form");`: This line selects the HTML form element with the `id` of "details-form" and assigns it to the `formElement` variable. The `getElementById` method is used to find the element.

```javascript
var alphaExp = /^[a-zA-Z]+$/;
var emailExp = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
var passExp = RegExp(
  "^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$"
);
```
- `var alphaExp = /^[a-zA-Z]+$/;`: This line defines a regular expression (`alphaExp`) that matches strings containing only alphabetic characters (both uppercase and lowercase).
- `var emailExp = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;`: This line defines a regular expression (`emailExp`) that matches valid email addresses. The pattern checks for characters before and after the "@" symbol, allowing for common email characters.
- `var passExp = RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$");`: This line defines a regular expression (`passExp`) to validate passwords. The password must:
  - Contain at least one uppercase letter.
  - Contain at least one number.
  - Contain at least one special character from the set `!@#$%^&*`.
  - Be at least 8 characters long.

```javascript
formElement.addEventListener("submit", function (event) {
```
- `formElement.addEventListener("submit", function (event) {`: This line adds an event listener to the form that listens for the "submit" event. When the form is submitted, it triggers the provided function.

```javascript
  event.preventDefault();
```
- `event.preventDefault();`: This line prevents the default form submission action, which would reload the page. This allows for custom validation logic to be executed first.

```javascript
  for (let i = 0; i < formElement.elements.length - 1; i++) {
```
- `for (let i = 0; i < formElement.elements.length - 1; i++) {`: This line starts a loop that iterates through each form element, except the last one (typically the submit button).

```javascript
    if (formElement[i].value.trim() === "") {
      alert("Empty Input Fields are present.");
      return;
    }
```
- `if (formElement[i].value.trim() === "") { alert("Empty Input Fields are present."); return; }`: This block checks if the current form element is empty after trimming any whitespace. If it is empty, an alert is shown, and the function exits early to prevent further validation.

```javascript
    if (
      formElement[i].id === "userid" &&
      (formElement[i].value.length < 5 || formElement[i].value.length > 12)
    ) {
      alert("Invalid Userid");
    }
```
- `if (formElement[i].id === "userid" && (formElement[i].value.length < 5 || formElement[i].value.length > 12)) { alert("Invalid Userid"); }`: This block checks if the current form element is the User ID field and if its length is less than 5 or more than 12 characters. If the User ID is invalid, an alert is shown.

```javascript
    if (
      formElement[i].id === "name" &&
      (!formElement[i].value.match(alphaExp) ||
        formElement[i].value.length < 11)
    ) {
      alert("Name is invalid");
      return;
    }
```
- `if (formElement[i].id === "name" && (!formElement[i].value.match(alphaExp) || formElement[i].value.length < 11)) { alert("Name is invalid"); return; }`: This block checks if the current form element is the Name field and if it either does not match the `alphaExp` regular expression (meaning it contains non-alphabetic characters) or is shorter than 11 characters. If the Name is invalid, an alert is shown, and the function exits early.

```javascript
    if (
      formElement[i].id === "email" &&
      !formElement[i].value.match(emailExp)
    ) {
      alert("Invalid Email Id!!");
      return;
    }
```
- `if (formElement[i].id === "email" && !formElement[i].value.match(emailExp)) { alert("Invalid Email Id!!"); return; }`: This block checks if the current form element is the Email field and if it does not match the `emailExp` regular expression. If the Email is invalid, an alert is shown, and the function exits early.

```javascript
    if (
      formElement[i].id === "password" &&
      !passExp.test(formElement[i].value)
    ) {
      alert("Password is Invalid");
      return;
    }
```
- `if (formElement[i].id === "password" && !passExp.test(formElement[i].value)) { alert("Password is Invalid"); return; }`: This block checks if the current form element is the Password field and if it does not match the `passExp` regular expression. If the Password is invalid, an alert is shown, and the function exits early.

```javascript
  alert("Successful Registration");
```
- `alert("Successful Registration");`: If all fields are valid, an alert is shown indicating successful registration.

```javascript
});
```
- `});`: This closes the event listener function and completes the script.

### Summary

This JavaScript code validates a registration form with the following checks:
1. Ensures all fields are filled out.
2. Validates the User ID length (5-12 characters).
3. Ensures the Name contains only alphabetic characters and is at least 11 characters long.
4. Checks that the Email is in a valid format.
5. Validates the Password contains at least one uppercase letter, one number, one special character, and is at least 8 characters long.

If any validation fails, an appropriate alert message is shown, and form submission is halted. If all validations pass, a success message is displayed.*/