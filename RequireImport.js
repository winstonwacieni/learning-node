// sample code
// Using require
// exporting messages.js

module.exports = "Hello Programmers";

//importing from messages.js
var msg = require("./message.js");
console.log(msg);

//for import()

const a = 1;
export { a as "myValue" };

// import keyword

import { myValue } from "modules.mjs";
