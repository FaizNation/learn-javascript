// function expression 

const convertCelciusToFarenheit = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
}

const temperatureInFarenheit = convertCelciusToFarenheit(90);
console.log('hasil konversi:', temperatureInFarenheit); 

