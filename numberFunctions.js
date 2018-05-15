// function to add one number to another

function add(x,y){

    return x + y;

}

//function to subtract one number from another

function subtract(x,y){

    return x - y;

}

// function to multiply one number by another

function multiply(x,y){

    return x * y;

}

// function to divide one number by another

function divide(x,y){

    return x / y;

}

// function to calculate the remainder of one number divided by another

function remainder(x,y){

    return x % y;

}

// function to calculate the square of a number

function square(x){

    return x * x;

}

// function to calculate the cube of a number

function cube(x){
    
    return x * x * x;

}

// function to add a number after three seconds "thinking time"

function addAfterThreeSeconds(num){

    var interval = setInterval(function(){add(num)}, 3000);
    
    function add(num){
    
        var result = num + num;
        console.log(result);
        clearInterval(interval);
    
    }

}

// function to calculate random number between specific range

function randomNumber(min, max) {

	return Math.floor(Math.random() * max) + min;
	
}

// function to calculate random number between 0 and n using Math methods

function random(num){

    return Math.round(Math.random() * n);

}

// for loop function to calculate factorials

function firstFactorial(num) {

    var factorial = 1

	for(var i = 1; i <= num; i++){
        factorial = factorial * i;
    }

return factorial;

}

// recursion function to calculate factorials

function factorial(n){
    
    if(n<0){
        alert("cannot make a factorial from a negative value");
        return;
    }

	if(n===0){
        return 1;
    }

	return n * factorial(n-1);

}

function addUpTo(num){

    var total = 0;

    for(i = 1; i <= num; i++){
        total += i;
    }

    return total;
    
}

// function to determine the largest number

function largerNumber(num1,num2){

    if(num1 < num2){
        return true
    } else {
        return false
    }

}

// function to separate minutes into hours and minutes

function timeConvert(num){

    var hours   = Math.floor(num/60);

    var minutes = num % 60;
    
    return hours + " hours and " + minutes + " minutes.";

}

// function to convert Celsius to Farenheit

function convertCToF(){

    var degreesCelsius = document.getElementById("#").value; 

    return degreesCelsius * 1.8 + 32;

}

// function to convert Farenheit to Celsius

function convertFToC(){

    var degreesFarenheit = document.getElementById("#").value;

    return (degreesFarenheit - 32) / 1.8;

}

// function to check for a negative value

function checkForNegative(num1, num2){

    switch(true){
        
        case (num1 < 0 && num2 < 0):
        return "Both of the values are negative.";
        break;
    
        case (num1 < 0 && num2 >= 0 || num1 >= 0 && num2 < 0):
        return "One of the values is negative.";
        break;
        
        case (num1 > 0 && num2 > 0):
        return "Neither of the values are positive.";
        break;
        
    }

}

// function to reverse a number

function reverseNumber(num){

    var reversedNumStr = num.toString().split("").reverse().join("");
    var reversedNum    = parseInt(reversedNumStr);

    return reversedNum;

}

//function to check a number range

function rangeChecker_50_99(x,y) {

    if((x >= 50 && x <= 99) && (!(y >= 50 && y <= 99))) {
        return "x in range: y not in range";
    } else if (!(x >= 50 && x <= 99) && ((y >= 50 && y <= 99))) {
        return "x not in range: y in range"; 
    } else if (!(x >= 50 && x <= 99) && (!(y >= 50 && y <= 99))) {
        return "x not in range: y not in range";
    } else
        return "x in range: y in range";
    
}

// function to find the highest number

function highest_number(x,y,z) {

    return Math.max(x,y,z);

}

// function to find the lowest number

function lowest_number(x,y,z) {

    return Math.min(x,y,z);
    
}

// function to test for a valid number using isNan

function valid_number(num) {

    if(isNaN(num)) {
        return "Is not a valid number";
    }

    return "Is a valid number";

}

// function to test for a valid number using isNan negation

function valid_number(num) {

    if(!(isNaN(num))) {
        return "Is valid number";
    }

    return "Is not valid number";

}

// function to more thoroughly test for a valid number using isNan and typeof

function valid_number(num) {

    if(typeof(num) !== "number" || isNaN(num)) {
        return "Is not valid number";
    } else 
        return "Is valid number";

}

// function to work out which number is closest to 100

function closest_to_100(num1,num2) {

    numA = num1 <= 100 ? 100 - num1 : num1 - 100;
    numB = num2 <= 100 ? 100 - num2 : num2 - 100;

    if(numA < numB) {
        return num1 + " is closest to 100.";
    } else if(numB < numA) {
        return num2 + " is closest to 100.";
    } else
        return num1 + " and " + num2 + " are equally close to 100.";

}