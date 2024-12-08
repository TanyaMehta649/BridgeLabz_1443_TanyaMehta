//PROBLEM 1
// Read a single digit number and write the number in word using Case
const number=4;
switch(number){
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
    console.log("Two");
    break;
    case 3:
    console.log("Three");
    break;
    case 4:
    console.log("Four");
    break;
    case 5:
    console.log("Five");
    break;
    case 6:
    console.log("Six");
    break;
    case 7:
    console.log("Seven");
    break;
    case 8:
    console.log("Eight");
    break;
    case 9:
    console.log("Nine");
    break;
    default:
    console.log("Invalid Input");

}
//PROBLEM 2
// Read a Number and Display the week day (Sunday, Monday,…)
const day=3;
switch(day){
    case 0:
    console.log("Sunday");
    break;
    case 1:
    console.log("Monday");
    break;
    case 2:
    console.log("Tuesday");
    break;
    case 3:
    console.log("Wednesday");
    break;
    case 4:
    console.log("Thursday");
    break;
    case 5:
    console.log("Friday");
    break;
    case 6:
    console.log("Saturday");
    break;
    default:
    console.log("Invalid input");

}
//PROBLEM 3
// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,…
// Read a number
const no = 1000; // Replace with your number (1, 10, 100, 1000, etc.)

// Use switch case to display the corresponding place value
switch (no) {
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten Thousand");
        break;
    case 100000:
        console.log("Hundred Thousand");
        break;
    case 1000000:
        console.log("Million");
        break;
    default:
        console.log("Invalid input. Please enter a valid power of 10 (1, 10, 100, 1000, etc.).");
}
