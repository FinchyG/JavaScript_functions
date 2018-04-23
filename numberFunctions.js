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