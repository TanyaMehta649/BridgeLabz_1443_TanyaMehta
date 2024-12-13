//Create a function that will convert from Fahrenheit to Celsius
function farhtocelsius(Fahrenheit) {
    let Celsius = (Fahrenheit - 32) * 5 / 9; 
    return Celsius;
}

let Fahrenheit = 98;
let Celsius = farhtocelsius(Fahrenheit);
console.log(`${Fahrenheit}°F is equal to ${Celsius.toFixed(2)}°C`); 
