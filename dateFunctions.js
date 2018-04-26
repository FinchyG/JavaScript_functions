function whatIsTheTime(){

    var date = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    

    var hours     = date.getHours();
    var hour      = (hours > 12) ? hours - 12 : hours;
    var prepend   = (hours >= 12) ? "PM" : "AM";
    var minutes   = date.getMinutes();
    var seconds   = date.getSeconds();
    
    return "Today is: " + days[date.getDay()] + ". Current time is: " + hour + prepend + ": " + minutes + ": " + seconds;

}

function whatIsTheDate(){

    var date  = new Date();
    var year  = date.getFullYear();
    var month = date.getMonth() + 1;
    var day   = date.getDate();
    if(month < 10){
        month = "0" + month;
    }
    if(day < 10){
        day   = "0" + day;
    }
    
    return day + "/" + month + "/" + year;
    
}

function tickingClock(){

    var clockTick = setInterval(function(){clockDisplay()}, 1000);

    function clockDisplay(){
    
        var date      = new Date();
        
        var hours24   = date.getHours();
        var hours     = (hours24 > 12) ? hours24 - 12 : hours24;
        var hour      = (hours < 10) ? "0" + hours : hours;
        
        var prepend   = (hours24 >= 12) ? "PM" : "AM";
        
        var minutes   = date.getMinutes();
        var minute    = (minutes < 10) ? "0" + minutes : minutes;
        
        var seconds   = date.getSeconds();
        var second    = (seconds < 10) ? "0" + seconds : seconds;
        
        console.log(hour + ":" + minute + ":" + second + " " + prepend);
    
    }

}