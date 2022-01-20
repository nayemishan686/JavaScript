//function
function summation(x,y){
    return x*y;
}
let sum = summation(10,2);
console.log(sum);

//onclick events
function first(){
    document.getElementById('first').innerHTML = 'You just click this button';
}

//onchange events
function mySelection(){
    var changing = document.getElementById('mySelection').value;
    document.getElementById('second').innerHTML = "You selected : " + changing;
}

//onmouseover events
function third(){
    document.getElementById('third').innerHTML  = "you just hover the mouse"
}

//onsmouseout events
function fourth(){
    document.getElementById('fourth').innerHTML = "You just mouseout"
}
//onkeydown events
function fifth(){
    alert('you press a key');
}

//onload events
function sixth(){
    alert('Page is loading');
}