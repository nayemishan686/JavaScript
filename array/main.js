//declare array
const cars = [
    'Audi',
    'BMW',
    'Volvo',
    'Toyota'
]
//make output
document.getElementById('first').innerHTML = cars;

//You can also create an array, and then provide the elements:
const car = [];
car[0] = 'Audi';
car[1] = 'BMW';
car[2] = 'Toyota';
document.getElementById('second').innerHTML = car;

//accessing array elements
document.getElementById('third').innerHTML = car[0];

// Changing array elements
car[0] = 'Volvo';
document.getElementById('fourth').innerHTML = car;

//array length check
document.getElementById('fifth').innerHTML = car.length;

//accessing last array elements
document.getElementById('sixth').innerHTML = car[car.length-1]

//array to string
const fruits = [
    'Banana',
    'Orange',
    'Apple',
    'Lemon',
    'Mango'
];
document.getElementById('seventh').innerHTML = fruits.toString();

//array pop
let fruit = fruits.pop();
document.getElementById('eight').innerHTML = fruits;

//array push
fruits.push('Mango');
document.getElementById('eight1').innerHTML = fruits;

//array shift
let fruit1 = fruits.shift();
document.getElementById('eight2').innerHTML = fruits;

//array push
fruits.unshift('Orange');
document.getElementById('eight3').innerHTML = fruits;

//array delete()
delete fruits[0];
document.getElementById('eight4').innerHTML = fruits;

//array Merge
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2,arr3);
document.getElementById('eight5').innerHTML = myChildren;