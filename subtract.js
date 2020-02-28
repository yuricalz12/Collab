function sub(){
    first = parseInt(document.getElementById('firstNum').value);
    second = parseInt(document.getElementById('secNum').value);
    result = first - second;
    document.getElementById('display').innerHTML = "Result is: " + result;
}