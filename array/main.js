//Large numbers between two numbers
var a = 10;
var b = 8;
var c = 15;
if(a>b){
    document.getElementById('first').innerHTML = a + ' is greater than ' + b;
}else{
    document.getElementById('first').innerHTML = b + ' is greater than ' + a;
}

//Large numbers between two numbers>b
if(a>b && a>c){
    document.getElementById('second').innerHTML = a + ' is greater than ' + b + ' & ' +c;
}else if(b>a && b>c){
    document.getElementById('second').innerHTML = b + ' is greater than ' + a + ' & ' +c;
}else{
    document.getElementById('second').innerHTML = c + ' is greater than ' + a + ' & ' + b;
}

//leap year checker
var year = 2022;
if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
    document.getElementById('third').innerHTML = year + ' is a leap year.'
}else{
    document.getElementById('third').innerHTML = year + ' is not a leap year.'
}


//1-50 even number using for loop
var even = ' ';
for(var i = 0; i <= 50; i++){
    if(i % 2 == 0){
        even += i + ', '; 
        document.getElementById('fourth').innerHTML = even;
    }
}

//1-50 odd number using for loop
var even = ' ';
for(var i = 0; i <= 50; i++){
    if(i % 2 != 0){
        even += i + ', '; 
        document.getElementById('fifth').innerHTML = even;
    }
}

// //if two loop is even it will run
// for(var i = 0; i <= 10; i++){
//     if(i % 2 == 0){
//         for(var j = 0; j<i; j++){
//             if(i%2 == 0){
//                 document.getElementById('sixth').innerHTML = i + ' '; 
//             }
//         }
//     }
// }

