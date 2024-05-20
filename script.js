const celsius = document.querySelector("#celsius");
const farenheit = document.querySelector("#farenheit");
const kelvin = document.querySelector("#kelvin");

// celsius to farenheit = (0 c * 9/5) + 32 = 32 f
// celsius to kelvin = 0 c + 273.15 = 273.15 k

celsius.addEventListener("input", () => {
    let c = parseFloat(celsius.value);
    let f = (c * 9/5) + 32;
    let k = c + 273.15;
    farenheit.value = f;
    kelvin.value = k;
})

// farenheit to celsius = (32 f - 32) * 5/9 = 0 c
// farenheit to kelvin  = (32 f - 32) * 5/9 + 273.15 = 273.15k

farenheit.addEventListener("input", () => {
    let f = parseFloat(farenheit.value);
    let c = (f - 32) * 5/9;
    let k = (f - 32) * 5/9 + 273.15;

    celsius.value = c;
    kelvin.value = k;
})

// kelvin to celsius = 0k -273.15 = -273.1 c
// kelvin to farenheit = (0k -273.15) * 9/5 + 32 = -459.7 f

kelvin.addEventListener("input", () => {
    let k = parseFloat(kelvin.value);
    let c= k - 273.15;
    let f = (k - 273.15) * 9/5 + 32;
    celsius.value = c;
    farenheit.value = f;
})