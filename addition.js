function addition(){
    first = parseInt(document.getElementById('firstNum').value);
    second = parseInt(document.getElementById('secNum').value);
    result = first + second;
    document.getElementById('display').innerHTML = "Result it: " + result;
}