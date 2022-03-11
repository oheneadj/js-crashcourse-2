let a = 10;
let b = 6;

console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a / b);
console.log(a % b);


//control flow
let age = 18;

if (age > 18) {
    console.log(`You are ${age} years. You can vote`);
}
else if(age < 18) {
    console.log(`You are ${age} years. You cannot vote`);
}


//Grading System - If Else
let marks = 80;

if (marks >=80) {
    console.log("Your grade is A");
}
else if (marks >=75) {
    console.log("Your grade is B+");
}
else if (marks >=70) {
    console.log("Your grade is B");
}else if(marks >=65) {
    console.log("Your grade is C+");
}else if(marks >=60) {
    console.log("Your grade is C");
}else if(marks >=55) {
    console.log("Your grade is D+");
}else if(marks >=50) {
    console.log("Your grade is D");
}else{
    console.log("Your grade is E. You have failed");
}

//Washroom App - Switch case

const gender = "Male";

switch (gender) {
    case "Male":
        console.log(`Please go to the ${gender} washroom`);
        break;
    case "Female":
        console.log(`Please go to the ${gender} washroom`);
        break;

    default:
        console.log(`No have no washroom available`);
        break;
}


/* For Loop

 for(start, end, increment){
     code goes here
 } 
 */

 for(let me = 1; me < 10; me++){
    console.log(`The value of me is ${me}`);
 }


 /* While Loop
 } 
 */

 let thisloop = 12;

 while (thisloop < 24) {
    console.log(`The value of me is ${thisloop}`);
    thisloop++;
 }