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

let a = function hello(){
  console.log('Hello world');
}

function goodbye(){
  console.log('Goodbye world');
}

// repeat(a, 3);
// repeat(goodbye, 5);

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

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

