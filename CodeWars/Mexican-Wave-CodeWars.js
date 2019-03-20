function wave(s){
  let arr = s.split('');
  let tempArr = [];
  let tempArr2 = [];
  
  for (let i = 0; i < s.length; i++) {
    for(let j = 0; j < s.length; j++) { //creating array of letters with proper UpperCase letters
      if (j !== i) tempArr.push(arr[j]);
      else tempArr.push(arr[j].toUpperCase());
    }
    tempArr2.push(tempArr.join('')); // array of letters is merged into string and stored in another array
    tempArr.length = 0; // array for storing letters (with applied UpperCase) is reset
  }

  let result = tempArr2.filter(word => word !== s); // final array storing Mexican Wave. Filtered because previous array stored wrong stings when empty space appeared (for example: [..., hellO world, hello world, hello World, ...]
  
  return result;
}

let test = ' gap ';
wave(test);