// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs'); // jshint ignore: line
const stdin = '/dev/stdin';

let inFile = process.argv[2] === '-' ? stdin : process.argv[2];

const sumLines = (array /*filename, callback*/) => {

  let result;
  for (let i = 0; i < array; i++) {
    result += array[i];
  }
  // callback();
};

fs.readFile(inFile, { encoding: 'utf8' }, (error, data) => {
  if(error) {
    console.error(error);
    return;
  }

  let dataArr = data.split('\n');
  let sum = sumLines(dataArr);
  console.log(sum);
});

module.exports = {
  sumLines,
};
