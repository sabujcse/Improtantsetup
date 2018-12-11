var onc = document.getElementById('btn');
onc.onclick = function ( ) {
    var firstname = document.getElementById('firstName').value;
    var secondname = document.getElementById('lastName').value;
    var fullname = firstname+' '+ secondname;
    alert('Thank You\n'+firstname+' '+secondname);
    document.getElementById('fullName').value = fullname;

}
var  addbutton = document.getElementById('add');
var  subbutton = document.getElementById('sub');
var mullbutton = document.getElementById('mul');
var  divbutton = document.getElementById('div');
var rembutton = document.getElementById('rem');
 addbutton.onclick = function () {
       var firstN = document.getElementById('firstNumber').value;
       var secondN = document.getElementById('secondNumber').value;
       var result = Number(firstN) + Number(secondN);
       document.getElementById('resultN').value = result;


 }
subbutton.onclick = function () {
    var firstN = document.getElementById('firstNumber').value;
    var secondN = document.getElementById('secondNumber').value;
    var result = firstN-secondN;
    document.getElementById('resultN').value = result;

}
mullbutton.onclick = function () {
    var firstN = document.getElementById('firstNumber').value;
    var secondN = document.getElementById('secondNumber').value;
    var result = firstN*secondN;
    document.getElementById('resultN').value = result;

}
divbutton.onclick = function () {
    var firstN = document.getElementById('firstNumber').value;
    var secondN = document.getElementById('secondNumber').value;
    var result = firstN/secondN;
    document.getElementById('resultN').value = result;

}
rembutton.onclick = function () {
    var firstN = document.getElementById('firstNumber').value;
    var secondN = document.getElementById('secondNumber').value;
    var result = firstN%secondN;
    document.getElementById('resultN').value = result;

}
