function convertCelciusToFarenheit(temperature) {
  // const temperatureInFarenheit = 9 / 5 * temperature + 32;
  // console.log('hasil konversi:', temperatureInFarenheit); ganti ke return values
  const result = 9 / 5 * temperature + 32;
  return result;
}

const temperatureInFarenheit = convertCelciusToFarenheit(90);
console.log('hasil conversi:', temperatureInFarenheit);

//const temperatureInCelcius = 90;
//convertCelciusToFarenheit(temperatureInCelcius);


// bisa isi paramsnya like (temperature = 50)
// or convertCelciusToFarenheit(50);

//next function expression ee di next file
