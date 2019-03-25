function simpleTransposition(text) {
  let row1 = [];
  let row2 = [];

  let arr = text.split('');
  
  for(let i = 0; i < arr.length; i++){
    if (i % 2 === 0) row1.push(arr[i]);
    else row2.push(arr[i]);
  }

  return row1.concat(row2)
             .join('');
}

let test = "Sample text"; //Sml etapetx
simpleTransposition(test);