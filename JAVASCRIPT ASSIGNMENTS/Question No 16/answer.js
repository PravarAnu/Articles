// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

function whichSeason(monthName){
    if(monthName == "September" || monthName=="October" || monthName=="November" || monthName == "september" || monthName=="october" || monthName=="november"){
        return "Autumn";
    }
    else if(monthName=="December" || monthName == "January" || monthName=="February" || monthName=="december" || monthName == "january" || monthName=="february"){
        return "Winter";
    }
    else if(monthName=="March" || monthName=="April" || monthName=="May" || monthName=="march" || monthName=="april" || monthName=="may"){
        return "Spring";
    }
    else{
        return "Summer";
    }
}


console.log(whichSeason("January"));
console.log(whichSeason("january"));
