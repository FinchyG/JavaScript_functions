// function to calculate random number between specific range

function randomNumber(min, max) {

	return Math.floor(Math.random() * max) + min;
	
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