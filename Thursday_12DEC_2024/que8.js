//Create a function that will convert from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32; 
    return fahrenheit;
}

let celsius = 36.67;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`);
