var num1 = +prompt("Enter the First number");
var num2 = +prompt("Enter a Second number");
var opt = prompt("Enter the operators (+ , - , * , /)");

var result;
if (opt === "+") {
  result = num1 + num2;
  console.log(result);
} else if (opt === "-") {
  result = num1 - num2;
  console.log(result);
} else if (opt === "*") {
  result = num1 * num2;
  console.log(result);
} else if (opt === "/") {
  result = num1 / num2;
  console.log(result);
} else {
  console.log("Not a number");
}
