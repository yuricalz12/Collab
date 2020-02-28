function multiply(){
    var first = parseInt(document.getElementById('firstNum').value);
    var second = parseInt(document.getElementById('secNum').value);
    var result = first*second;
    document.getElementById('display').innerHTML = "Result is: " + result;

}
