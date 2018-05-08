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

function kaprekarsConstant(num){

    const kap      = 6174;
    var numStr     = num.toString();

    function checkForFourDigits(numStr){
        if(numStr.length < 4){
            var fourDigitNumStr = increaseToFourDigits(numStr);
            return fourDigitNumStr;
        } else {
            return numStr;
        }
    }

    function increaseToFourDigits(x){
        while(x.length < 4){
            x = x + "0";
        }
        return x;
    }
    
}

kaprekarsConstant(2110);

if(number.length !== 4){
    console.log("Not a valid four-digit number");
} else {
    console.log("That is a valid four-digit number");
}

function kaprekarsConstant(num){
 
var validNum = checkForFourDigits();

    function checkForFourDigits(num){
        if(num < 1000){
        while(num < 1000){
            num = num * 10;
        }
        return num;
        } else { 
        while(num > 9999){
        num = Math.floor(num / 10);
        }
        return num;
        }
    }

    return validNum;
    
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