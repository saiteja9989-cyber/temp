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
  if (from === "C" && to=== "C")
     tempInCelsius = input;
  else if (from === "F" && to==="F")
     tempInCelsius = input;
    else if (from==="C"&& to=="F")
      tempInCelsius= (input*9/5)+32
    else if (from==="F"&& to=="C")
      tempInCelsius=(input-32)*5/9

  result.innerText = `${input}°${from} = ${tempInCelsius.toFixed(2)}°${to}`;
}
