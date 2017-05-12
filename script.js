//Question 1 - Recursive
function factorial(n){
    if(n === 1)
        return 1;
    return n * factorial(n -1);
}

//Question 2
function range(a, b) {
    var result = "";
    if (a == b)
        return a;
    else if (a > b)
        return result = a + ", " + range (a-1,b);
    else if (a < b)
        return result = b  + ", " + range (a, b-1);
}

//Question 3
function exponentProgram(x, y){
    if(y === 1)
        return x;
    return x * exponentProgram(x, y-1);
}