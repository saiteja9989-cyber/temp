function convertTemp() {
  let input = parseFloat(document.getElementById("inputTemp").value);
  let from = document.getElementById("fromUnit").value;
  let to = document.getElementById("toUnit").value;
  let result = document.getElementById("result");

  if (isNaN(input)) {
    result.innerText = "Please enter a valid number.";
    return;
  }

  
  let tempInCelsius;
  if (from === "C") tempInCelsius = input;
  else if (from === "F") tempInCelsius = (input - 32) * 5/9;
  

  
  let converted;
  if (to === "C") converted = tempInCelsius;
  else if (to === "F") converted = (tempInCelsius * 9/5) + 32;


  result.innerText = `${input}°${from} = ${converted.toFixed(2)}°${to}`;
}
