// functions that run switch statements

function switchStatementNumbers(num){

    switch(num){
        case 1:
        return "Your number is 1";
        break;
        
        case 2:
        return "Your number is 2";
        break;

        case 3: 
        return "Your number is 3";
        break;

        default:
        return "I do not know your number.";
        break;
        
    }

}

function switchStatementNumberRanges(num){

    switch(true){
        case (num < 0):
        return "Your number is a negative value";
        break;
        
        case (num > 0 && num <= 10):
        return "Your number is between 1 and 10";
        break;

        case (num > 10 && num <= 20): 
        return "Your number is between 11 and 20";
        break;

        case (num > 20):
        return "Your number is greater than 20";
        break;
        
    }

}

function switchStatementStrings(fruit){

    switch(fruit){
        case "banana":
        return "You have a banana.";
        break;
        
        case "orange":
        return "You have an orange.";
        break;

        case "apple": 
        return "You have an apple.";
        break;

        default:
        return "We don't have that fruit, sorry.";
        break;
        
    }

}

function switchStatementRegexStrings(fruit){
    
    switch(true){
        case /banana/i.test(fruit):
            return "You have a banana";
            break;

        case /orange/i.test(fruit):
			return "You have an orange";
			break;

        case /apple/i.test(fruit):
			return "You have an apple";
			break;

        default:
            return "We don't have that fruit, sorry.";
            
    }

}

// function that runs a do/while statement

function multiplyToOneHundred(num){

    do{
        num *= 2;
    }
    while(num < 100);

    return num;

}

// functino that runs a while loop

function multiplyToOneHundred(num){

    while(num < 100){
        num *= 2;
    }

    return num;

}

// function that runs a for loop

function countT0Ten(){

    for(i=1; i<=10; i++){
        console.log("The count is " + i +".");
    }
    
}