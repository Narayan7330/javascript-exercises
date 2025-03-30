const convertToCelsius = function(temp) {

  const degreecel = (temp - 32)*5/9;
  const finalTemp = Math.round(degreecel * 10) / 10
  return finalTemp;


};

const convertToFahrenheit = function(temp) {

  const degreefahrenite = (temp*9/5+32);
  const finalTemp = Math.round(degreefahrenite * 10) / 10
  return finalTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
