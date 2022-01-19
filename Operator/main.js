/*=========================
    Arithmetic Operator
    +,-,*,/,%,++,--
==========================*/

var x = 9;
var y = 4;

//Addition
var sum = x + y;
console.log(sum);

//Subtraction
var sub = x - y;
console.log(sub);

//multiplication
var mul = x * y;
console.log(mul);

//Devision
var div = x / y;
console.log(div);

//Modulous
var reminder = x % y;
console.log(reminder);

//increment
x++;
console.log(x);

//decrement
y--;
console.log(y);


/*=========================
    Assignment Operator
    =, +=, -=, *=, /=, %=
==========================*/

//Assign
var a,b;
a = 13;
b = 7;

//Add & Assign
a += b;
console.log(a);

//Subtract & Assign
a -= b;
console.log(a);

//Multiplication & Assign
a *= b;
console.log(a);

//Devision & Assign
a /= b;
console.log(a);

//Modulus & Assign
a %= b;
console.log(a);


/*===================================
         Comparison Operator
    ==, ===, !=, !==, >, >=, <, <=
====================================*/

var m,n;
m = 20;
n = 10;

//Equal
var equal = (m == n);
console.log(equal);

//Identical
var identical = (m === n);
console.log(identical);

//Not Equal
var notEqual = (m != n);
console.log(notEqual);

//var Not Identical
var notIdentical = (m !== n);
console.log(notIdentical);

//Greater Than
var greaterThan = (m > n);
console.log(greaterThan);

//Greater Than Equal
var greaterThanEqual = (m >= n);

//Less Than
var lessThan = (m < n);
console.log(lessThan);

//Less Than Equal
var lessThanEqual = (m <=n);
console.log(lessThan);


/*======================
    Logical Operator
        &&, ||, !
=========================*/
var t,f;
t = 20;
f = 30;

//Logical AND
var trueCheck = (t == m && f == n);
console.log(trueCheck);

//Logical OR
var falseCheck = (t == m || f == n);
console.log(falseCheck);

//Logical Not
var notCheck = (!(t == m && f == n));
console.log(notCheck);