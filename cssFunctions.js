// function to show a hidden element

function show() {

    var element = document.querySelector('#');
    
    element.style.visibility = "visible";
  
  }
  
  // function to hide a visible element
  
  function hide() {
    
    var element = document.querySelector('#');
    
    element.style.visibility = "hidden";
  
  }

  // function for validating text input data
  function question() {
        
    var userAnswer   = document.getElementById('#').value.trim().toUpperCase();
    var answer       = "*";
            
    if(userAnswer == answer){
      . . .;
    } else {
      . . .;
    }
    
  }