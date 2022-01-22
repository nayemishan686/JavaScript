//object declaration and use only property and value
const man = {
    fname : 'Nayem',
    lname : 'Hossain',
    age : 22,
    passion : 'Full stack web Developer',
    hometown : 'Lakshmipur',
    mdetails : function() {
        return 'He is a '+ this.passion;
    }
};
//Display data from object
document.getElementById('first').innerHTML = "My name is " + man.fname +' '+ man.lname + '. I am ' + man.age + ' years old. My dream is '+ man.passion + 'My home town is ' +man.hometown +'.';




//object declaration and use only property and value
const car = {
    name : 'BMW',
    color: 'Black',
    owner: 'Nayem Hossain',
    details: function() {
        return 'This is a '+ this.name + '. It is a ' + this.color +' color. The owner of this car is '+ this.owner + '.';
    }
};
//Display data from object
document.getElementById('second').innerHTML = car.details();

//Access only two Property
document.getElementById('third').innerHTML = car.name + ' ' + car.color + ' color';

//Access only two Method
document.getElementById('fourth').innerHTML = car.details() + ' ' + man.mdetails();