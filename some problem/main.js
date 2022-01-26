//how to see array values by increment
console.log('array values show by increment:');
const fruits = ['Apple','Banana','Orange','Mango','coconut'];
let length = fruits.length;
for(let i = 0; i < length; i++){
    console.log(fruits[i]);
}

//how to see array values by decrement
console.log('array values show by decrement:');
let dlength = fruits.length;
for(let i = dlength - 1; i >= 0; i--){
    console.log(fruits[i]);
}

//how to do sum 10 number in array
console.log('how to do sum 10 number in array:');
let numbers = [10,59,57,65,77,86,99,97,98,85];
function sum(oldvalue, newvalue){
    return oldvalue + newvalue;
}

let summation = numbers.reduce(sum);
console.log(summation);