function validatePIN (pin) {
  if (pin.length == 4 || pin.length == 6) {
    let check = true;
    for (let element of pin) {
      let x = parseInt(element);
      if (isNaN(x) == true) {
        check = false;
      }
    }
    return check;
  } else return false;
}


// testy
console.log(validatePIN('1234'));
console.log(validatePIN('0000'));
console.log(validatePIN('.123'));
console.log(validatePIN('1.24'));
console.log(validatePIN('-242'));
console.log(validatePIN('123554'));
console.log(validatePIN('123_0'));

