function numberOfDays(monthName){
//     var year = new Date().getFullYear();
//     monthName = monthName.toLowerCase();

//     var leapOrNot = ()=> {
//         if(year % 400 == 0){
//             return true;
//         }else if(year % 100){
//             return false;
//         }else if(year % 4 == 0){
//             return true;
//         }else{
//             return false;
//         }
//     } 

//     if(monthName == "january" || monthName == "march" || monthName == "may" || monthName == "july" || monthName == "august" || monthName == "october" || monthName =="december"){
//         return 31;
//     }
//     else if(monthName =="february"){
//         if(leapOrNot == true){
//             return 29;
//         }
//         else{
//             return 28;
//         }
//     }else{
//         return 30;
//     }
// }