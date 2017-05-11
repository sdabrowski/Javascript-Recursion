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
