const formElement = document.getElementById("details-form");
var alphaExp = /^[a-zA-Z]+$/;
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  for (let i = 0; i < formElement.elements.length - 1; i++) {
    if (formElement[i].value.trim() === "") {
      alert("Empty Input Fields are present.");
      return;
    }

    if (formElement[i].id === "regno" && formElement[i].value.length !== 12) {
      alert("Invalid Register Number");
      return;
    }

    if (formElement[i].id === "subcode" && formElement[i].value.length !== 7) {
      alert("Invalid Subject Code");
      return;
    }

    if (
      formElement[i].id === "marks-1" ||
      formElement[i].id === "marks-2" ||
      formElement[i].id === "marks-3"
    ) {
      if (formElement[i].value.match(alphaExp)) {
        alert("Marks field contains an alphabet !!");
        return;
      }

      if (
        Number(formElement[i].value) > 20 ||
        Number(formElement[i].value) < 0
      ) {
        alert("Marks out of range");
        return;
      }
    }
  }

  const marks = [];
  for (let i = 0; i < 3; i++) {
    let num = Number(formElement[i + 2].value);
    marks.push(num);
  }

  marks.sort(function (a, b) {
    return a - b;
  });

  const avg = (marks[1] + marks[2]) / 2;
  alert("The average marks of best two tests is: " + avg);
});
/*
Sure! Let's go through this JavaScript code line by line to understand what it does and how it works.

### Line-by-Line Explanation

```javascript
const formElement = document.getElementById("details-form");
```
- `const formElement = document.getElementById("details-form");`: This line selects the form element with the ID `details-form` and assigns it to the constant `formElement`. This allows us to manipulate the form in the JavaScript code.

```javascript
var alphaExp = /^[a-zA-Z]+$/;
```
- `var alphaExp = /^[a-zA-Z]+$/;`: This line defines a regular expression `alphaExp` that matches any string consisting only of alphabetic characters (uppercase and lowercase).

```javascript
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
```
- `formElement.addEventListener("submit", function (event) {`: This line adds an event listener to the form for the `submit` event. When the form is submitted, the function provided as the second argument is executed.
  - `event.preventDefault();`: This line prevents the default action of the form submission (i.e., it stops the form from submitting and refreshing the page).

```javascript
  for (let i = 0; i < formElement.elements.length - 1; i++) {
    if (formElement[i].value.trim() === "") {
      alert("Empty Input Fields are present.");
      return;
    }
```
- `for (let i = 0; i < formElement.elements.length - 1; i++) {`: This loop iterates over each form element except the last one (the submit button).
  - `if (formElement[i].value.trim() === "") {`: Checks if the value of the current form element is an empty string (ignoring any whitespace).
    - `alert("Empty Input Fields are present.");`: If any field is empty, it shows an alert with the message "Empty Input Fields are present."
    - `return;`: Stops further execution of the function.

```javascript
    if (formElement[i].id === "regno" && formElement[i].value.length !== 12) {
      alert("Invalid Register Number");
      return;
    }

    if (formElement[i].id === "subcode" && formElement[i].value.length !== 7) {
      alert("Invalid Subject Code");
      return;
    }
```
- These two conditions validate specific input fields:
  - `if (formElement[i].id === "regno" && formElement[i].value.length !== 12) {`: Checks if the `regno` field value is not exactly 12 characters long.
    - `alert("Invalid Register Number");`: If the check fails, it shows an alert with the message "Invalid Register Number".
    - `return;`: Stops further execution of the function.
  - `if (formElement[i].id === "subcode" && formElement[i].value.length !== 7) {`: Checks if the `subcode` field value is not exactly 7 characters long.
    - `alert("Invalid Subject Code");`: If the check fails, it shows an alert with the message "Invalid Subject Code".
    - `return;`: Stops further execution of the function.

```javascript
    if (
      formElement[i].id === "marks-1" ||
      formElement[i].id === "marks-2" ||
      formElement[i].id === "marks-3"
    ) {
      if (formElement[i].value.match(alphaExp)) {
        alert("Marks field contains an alphabet !!");
        return;
      }

      if (
        Number(formElement[i].value) > 20 ||
        Number(formElement[i].value) < 0
      ) {
        alert("Marks out of range");
        return;
      }
    }
```
- This section checks the validity of the marks fields (`marks-1`, `marks-2`, `marks-3`):
  - `if (formElement[i].value.match(alphaExp)) {`: Checks if the marks field contains alphabetic characters.
    - `alert("Marks field contains an alphabet !!");`: If the check fails, it shows an alert with the message "Marks field contains an alphabet !!".
    - `return;`: Stops further execution of the function.
  - `if (Number(formElement[i].value) > 20 || Number(formElement[i].value) < 0) {`: Checks if the marks value is outside the valid range (0 to 20).
    - `alert("Marks out of range");`: If the check fails, it shows an alert with the message "Marks out of range".
    - `return;`: Stops further execution of the function.

```javascript
  const marks = [];
  for (let i = 0; i < 3; i++) {
    let num = Number(formElement[i + 2].value);
    marks.push(num);
  }
```
- `const marks = [];`: Initializes an empty array `marks` to store the marks.
- `for (let i = 0; i < 3; i++) {`: Loops through the first three marks fields.
  - `let num = Number(formElement[i + 2].value);`: Converts the value of the marks field to a number and assigns it to `num`.
  - `marks.push(num);`: Adds the number to the `marks` array.

```javascript
  marks.sort(function (a, b) {
    return a - b;
  });
```
- `marks.sort(function (a, b) { return a - b; });`: Sorts the `marks` array in ascending order.

```javascript
  const avg = (marks[1] + marks[2]) / 2;
  alert("The average marks of best two tests is: " + avg);
});
```
- `const avg = (marks[1] + marks[2]) / 2;`: Calculates the average of the two highest marks (the last two elements of the sorted array).
- `alert("The average marks of best two tests is: " + avg);`: Shows an alert with the message "The average marks of best two tests is: " followed by the calculated average.

### Summary

This JavaScript code validates the form fields for a register number, subject code, and marks for three tests. It ensures that:
- All fields are filled.
- The register number is exactly 12 characters long.
- The subject code is exactly 7 characters long.
- The marks fields contain valid numeric values between 0 and 20 and do not contain alphabetic characters.

Upon successful validation, it calculates the average of the two best test marks and displays the result in an alert.
*/