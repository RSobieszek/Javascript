function countBs(str) {
  let word = String(str);
  let count = 0;
  for (let number = 0; number < word.length; number++) {
    if (word[number] == 'B'){
      count++;
    }
  }
  return count;
  /*
  console.log(count);
  console.log(word.length);
  console.log(word);
  */
}    

countBs('BoBby Bean');


function countChar(str, letter) {
  let word = String(str);
  let count = 0;
  for (let number = 0; number < word.length; number++) {
    if (word[number] == letter){
      count++;
    }
  }
  return count;
}

countChar('staaarocie', 'a');
