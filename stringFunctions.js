// functions to capitalise first letters

function properNoun(str) {

   var properNoun = str.substring(0,1).toUpperCase() + str.substring(1).toLowerCase();
  return properNoun;
  
}

function properNouns(str) {

    var words = str.split(" ");
    for( i = 0; i < words.length; i++){
        words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1).toLowerCase();
    }
    return words.join(" ");

}

//functions to reverse strings

  // using methods

  function reverseString(str) {

    return str.split("").reverse().join("");
    
  }

  // using a for loop

  function reverseString(str) {
    
    var newStr = "";
    for( i = str.length - 1; i >= 0; i--){
      newStr += str[i];
    }
	return newStr;

  }

  // using recursion

  function reverseString(str) {

    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
	
}

// function to find the longest word in a string

function longestWord(str) {
    
    var arr = str.match(/[a-z0-9]+/gi);

	arr.sort(function(a,b) {
    	return b.length - a.length;
    });

    return arr[0];
    
}

// function to find the shortest word in a string

function shortestWord(str) {
    
    var arr = str.match(/[a-z0-9]+/gi);

	arr.sort(function(a,b) {a.length - b.length});

    return arr[0];
    
}

// function utilising Unicode values to return the next characters of strings

function getNextChars(str){

    var strArr        = [];
    var strArrPlusOne = [];
	
	for(i = 0; i <= str.length - 1; i++){
	 	strArr.push(str.charCodeAt(i));
		strArr[i] = strArr[i] + 1;
	    strArrPlusOne = String.fromCharCode.apply(null, strArr);
	}

		return strArrPlusOne;

}

// function utilising Unicode values to return the previous characters of strings

function getPreviousChars(str){

    var strArr        = [];
    var strArrPlusOne = [];
	
	for(i = 0; i <= str.length - 1; i++){
	 	strArr.push(str.charCodeAt(i));
		strArr[i] = strArr[i] - 1;
	    strArrPlusOne = String.fromCharCode.apply(null, strArr);
	}

		return strArrPlusOne;

}