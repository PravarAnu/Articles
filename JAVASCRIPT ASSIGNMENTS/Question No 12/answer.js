// Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

var now = new Date();
var today = {
    year: now.getFullYear(),
    month: now.getMonth()+1,
    date: now.getDate(),
    hour: now.getHours(),
    minute: now.getMinutes()
}



console.log(`${today.year}-${today.month}-${today.date} ${today.hour}:${today.minute}`);
console.log(`${today.date}-${today.month}-${today.year} ${today.hour}:${today.minute}`);
console.log(`${today.date}/${today.month}/${today.year} ${today.hour}:${today.minute}`);
