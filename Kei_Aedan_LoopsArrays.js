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

console.log(average([55, 3, 52, 56,123]));