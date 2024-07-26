const result = document.getElementById("result");

function clearScreen() {
  result.value = "";
}
function display(value) {
  result.value += value;
}
function calculate() {
	var eq = result.value;
  	var res = eval(eq);
  	result.value = res.toFixed(2);
}
function deleteChar() {
  var eq = result.value;
  result.value = eq.substring(0, eq.length - 1);
}
/*
Let's break down the JavaScript code line by line, explaining each part for someone who is new to JavaScript.

### JavaScript Code Explanation

```javascript
const result = document.getElementById("result");
```

- `const result`: Declares a constant variable named `result`.
- `document.getElementById("result")`: Retrieves the HTML element with the ID `result` (the display box of the calculator) and assigns it to the `result` variable. This allows us to easily access and manipulate the display box.

### Clear Screen Function

```javascript
function clearScreen() {
  result.value = "";
}
```

- `function clearScreen() { ... }`: Defines a function named `clearScreen`.
- `result.value = ""`: Sets the value of the `result` element (the display box) to an empty string, effectively clearing any text displayed.

### Display Function

```javascript
function display(value) {
  result.value += value;
}
```

- `function display(value) { ... }`: Defines a function named `display` that takes one parameter, `value`.
- `result.value += value`: Appends the `value` to the current value of the `result` element. This means if the display box currently shows `12` and `3` is passed to `display`, the display box will now show `123`.

### Calculate Function

```javascript
function calculate() {
  var eq = result.value;
  var res = eval(eq);
  result.value = res.toFixed(2);
}
```

- `function calculate() { ... }`: Defines a function named `calculate`.
- `var eq = result.value`: Retrieves the current value of the `result` element (the mathematical expression) and stores it in the `eq` variable.
- `var res = eval(eq)`: Uses the `eval` function to evaluate the expression stored in `eq`. The `eval` function takes a string and executes it as JavaScript code, which is how it calculates the result of the expression.
- `result.value = res.toFixed(2)`: Sets the value of the `result` element to the calculated result, formatted to two decimal places using `toFixed(2)`.

### Delete Character Function

```javascript
function deleteChar() {
  var eq = result.value;
  result.value = eq.substring(0, eq.length - 1);
}
```

- `function deleteChar() { ... }`: Defines a function named `deleteChar`.
- `var eq = result.value`: Retrieves the current value of the `result` element and stores it in the `eq` variable.
- `result.value = eq.substring(0, eq.length - 1)`: Sets the value of the `result` element to a substring of `eq`, which excludes the last character. This effectively deletes the last character from the display box.

### Summary

- `result`: A reference to the display box in the HTML.
- `clearScreen()`: Clears the display box.
- `display(value)`: Appends a value to the current display.
- `calculate()`: Evaluates the expression in the display and shows the result.
- `deleteChar()`: Removes the last character from the display.

This JavaScript code, combined with the previously provided HTML, creates a functional calculator. When buttons are pressed, the corresponding values or operations are displayed, and the calculations are performed when the `=` button is clicked. The `Clear` and `Delete` buttons clear the display or remove the last character, respectively.*/

