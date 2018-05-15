// function to list the clubs a footballer has made appearances for

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