const { age } = require("./joinStrings");
const { fullName } = require("./joinStrings");

const birthYear = 1947;
const thisYear = 1965;
const firstName = "Carlos";
const lastName = "Stevenson";

const greeting = `Hello! My name is ${fullName} and I am ${age} years old.`;

console.log(greeting);

module.exports = {
  greeting,
  birthYear,
  thisYear,
  firstName,
  lastName
}
