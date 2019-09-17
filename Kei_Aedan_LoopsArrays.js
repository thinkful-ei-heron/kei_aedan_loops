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

function hello(){
  console.log('Hello world');
}

function goodbye(){
  console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);