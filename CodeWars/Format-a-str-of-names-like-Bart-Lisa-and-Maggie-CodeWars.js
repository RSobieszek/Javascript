function list(names){
  let array = names.map(x => {
    return x['name'];
  })
  
  let result = '';
  // let y = array.reduce((a,b) => {a + ', ' + b);

  for (let i = 0; i < array.length; i++) {
    if (i == array.length - 2) {
      result += array[i] + ' & ';
    } else if (i == array.length - 1){
      result += array[i];
    } else {
      result += array[i] + ', ';
    }
  }
  console.log(array);
  console.log(result);
  // console.log(y);
}

let arr = [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ];
list(arr);
