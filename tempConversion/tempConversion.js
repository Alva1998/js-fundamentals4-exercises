const ftoc = function(temp) {
  //*fahrenheit to celsius: subtract 32, multiply 5, then divide 9 
  let calculation = (temp - 32) * 5 / 9;
  return Math.round(calculation * 10) / 10;
}

const ctof = function(temp) {
  //*celsius to fahrenheit 
  let calculation = (temp * 9 / 5) + 32;
  return Math.round(calculation * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
