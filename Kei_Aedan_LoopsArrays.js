'use strict';
function max(numbers){
  let max;
  if (numbers.length === 0){
    return undefined;
  } else {
    max = numbers[0];
    let i = 0;
    while (i<numbers.length){
      if (numbers[i] > max){
        max = numbers[i];
      }
      i++;
    }
    return max;
  }
}

function min(numbers){
  let min;
  if (numbers.length === 0){
    return undefined;
  } else {
    min = numbers[0];
    let i = 0;
    while (i<numbers.length){
      if (numbers[i] < min){
        min = numbers[i];
      }
      i++;
    }
    return min;
  }
}

function average(num) {
  let total = 0; 
  num.forEach(element => {
    total += element;
  });
  return total/num.length;
}

function repeat(fn, n){
  for (let i = 0; i < n; i++){
    fn();
  }
}

/*function hello(){
  console.log('Hello world');
}

function goodbye(){
  console.log('Goodbye world');
}
*/

repeat(hello => console.log('Hello world'), 5);
repeat(goodbye => console.log('Goodbye world'), 5);

function filter(arr, fn) { 
  let newArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(fn(arr[i]) === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filter(myNames, name => name[0] === 'R')); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    if (warningCounter ===1){
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    } else {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
    }
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('Water on the Road');
const thunderWarning = hazardWarningCreator('Lightning in the air');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
floodWarning('Main St and Centinela Ave');
thunderWarning('Olympic Blvd and Pacific Ave');
thunderWarning('Olympic Blvd and Main St');


function turtle(arr) {
  let arrayFilter = arr.filter(element => element[0] >= 0 && element[1] >= 0);
  let arrayMap = arrayFilter.map(element => element[0] + element[1]);
  let counter = 1; 
  arrayMap.forEach(element => {
    console.log(`Movement #${counter}: ${element} steps`);
    counter++;
  });

}

turtle([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]);

let text = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let arr = text.split(' ');
let decode = arr.reduce( function(accumulator, current) {
  if (current.length === 3){
    return accumulator = accumulator + ' ';
  } else {
    return accumulator = accumulator + current[current.length-1].toUpperCase();
  }
}, '');
console.log(decode);