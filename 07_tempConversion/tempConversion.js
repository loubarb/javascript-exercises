const ftoc = function(fahrenheitTemp) {
  const temp = (fahrenheitTemp - 32) * 5 / 9;
  return Math.round(temp * 10) / 10;
};

const ctof = function(celsiusTemp) {
  const temp = celsiusTemp * 9/5 + 32;
  return Math.round(temp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
