//function factorial(n) {
//    var value = n;
//    
//    for(i=1; i<n; i++){
//        value = value * (n-i);
//    }
//    
//    alert("The factorial value is: " + value);
//}

//Question 1 - Recursive
function factorial(n){
    if(n === 1)
        return 1;
    return n * factorial(n -1);
}

//Question 2
//function range(x, y) {
//    if (x+1 === y)  return;
//    console.log(y-1);
//    range(x, y-1);
//}

function exponentProgram(x, y){
    if(y === 1)
        return x;
    return x * exponentProgram(x, y-1);
}