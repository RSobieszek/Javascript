function accum(s) {
  let newStr = '';
	for (i = 0; i < s.length; i++) {
    for (j = 0; j <= i; j++){
      if (j == 0) {
        newStr += s[i].toUpperCase();
      } else {
        newStr += s[i].toLowerCase();
      }
    }
    if (!(i == s.length - 1)){
      newStr += '-';
    }
  }
  return newStr;
}

let str = 'ZpglnRxqenU'
console.log(accum(str));
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"