function isPangram(string){
  let result = undefined;
  let resCheck = 0;
  let check = "abcdefghijklmnpqrstuvwxyz".split('');
  string = string.toLowerCase();
  // console.log(string);
  string = string.split('');
  for (let i of check) {
    if (string.includes(i)) {
      result = true;
      console.log(i, result);
    } else {
      result = false;
      resCheck++;
      console.log(i, result);
      // break;
    }
  }
  if (resCheck != 0) result = false;
  return result;
}

// var string1 = "This is not a pangram.";
var string2 = "How quickly daft jumping zebras vex";

// console.log(isPangram(string1));
console.log(isPangram(string2));
