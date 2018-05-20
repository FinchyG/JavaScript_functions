// function to list the clubs a footballer has made appearances for using forEach

function clubs_list() {

    var david_beckham = ["Preston North End", "Manchester United", "Real Madrid", "L.A. Galaxy", "A.C. Milan"];

    david_beckham.forEach(function(club) {
        console.log("Played for: " + club);
    });

}

// function to store arguments in a single variable

function arguments_variable(x,y,z) {

     return variable = [...arguments];

}

// function to take an unspecified number of arguments into one variable

function n_arguments_variable(...args) {

    return variable = [...arguments];

}

// function to return a footballer's name and the clubs they have made appearances for

function footballers_club_list(player, ...clubs) {

    var teams = [...clubs].join(', ');

    return player + " played for: " + teams + ".";

}

// function to list favourite footballers using for...in

function favourtie_footballers() {

    var string      = "My favourite footballers are ";
    var footballers = {
                        1: "David Beckham",
                        2: "Michael Owen",
                        3: "Tony Adams"
                      };
    var length      = Object.keys(footballers).length;
    var count       = 0;
        
    for (var player in footballers) {
        count ++;
        if(count === length - 1) {
            string += footballers[player] + " ";
            continue;
        }
        if(count === length) {
            string += "and " + footballers[player] + ".";
            break;
        }
        string += footballers[player] + ", ";
    }

    return string;

}