// fs module
const fs = require('fs');
const data = fs.readFile('samples.txt', 'utf-8');

console.log(data);

// IO 
const data2 = fs.readFileSync('/content.md');
console.log(data2)

