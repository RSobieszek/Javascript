function parse(data) {
  let val = 0;
  let result = [];
  let input = data.split('');
  for (let e of input){
    if (e === "i") val += 1;
    if (e === "s") val *= val;
    if (e === "d") val -= 1;
    if (e === "o") result.push(val);
  }
  return result;
}

// sample test
let x = "iiisdoso";
parse(x);