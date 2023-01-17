var age = prompt("Enter your age: ");

if(age>=18){
    console.log("You are old enough to drive");
}else{
    console.log(`Wait for ${18-age} more years to drive`);
}