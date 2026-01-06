let temperatureInFarenheit = null ;

// ini sintak function normali
const convertCelciusToFarenheitRegular = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};

// ini pake sintak
const convertCelciusToFarenheitArrow = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

//versi ringkas
const convertCelciusToFarenheitarrowsingkat = 
 (temperature) => (9 / 5) * temperature + 32;
