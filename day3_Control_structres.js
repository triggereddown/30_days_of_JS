//Feature request code
// Script to use if else to check positive and negetive
let a=10;
if(a%2==0)
{
    console.log("POsitive")
}
else if(a==0)
{
    console.log("ZERO")
}
else{
    console.log("Negetive")
}

//Voting elgibility test

var age=2;
if(age>=18)
{
    console.log("Eligible to vote")
}
else{
    console.log("Not eligible")
}

//Day finding switch 
var ch=4;
switch(ch)
{
    case 1: console.log("Monday")
    break;
    
    case 2: console.log("Tuesday")
    break;
    
    case 3: console.log("Wednesday")
    break;
    
    case 4: console.log("Thursday")
    break;
    
    case 5: console.log("Friday")
    break;
    
    case 6: console.log("Satyrday")
    break;
    
    case 7: console.log("Sunday")
    break;
}

//Leap Year Chek
var year = 2020;

if (year % 400 == 0) {
    console.log("Yes, leap year");
} else if (year % 100 == 0) {
    console.log("Not a leap year");
} else if (year % 4 == 0) {
    console.log("Yes, leap year");
} else {
    console.log("Not a leap year");
}

