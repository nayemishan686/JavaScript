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