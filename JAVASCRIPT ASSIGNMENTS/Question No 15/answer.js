// Write a program which can give grades to students according to theirs scores:
// - 80-100, A
// - 70-89, B
// - 60-69, C
// - 50-59, D
// - 0-49, F

function giveGrades(marks){
    if(marks>=80 && marks<=100){
        return "A";
    }else if(marks>=70 && marks<=79){
        return "B";
    }else if(marks>=60 && marks<=69){
        return "C";
    }else if(marks>=50 && marks<=59){
        return "D";
    }else{
        return "F";
    }
}