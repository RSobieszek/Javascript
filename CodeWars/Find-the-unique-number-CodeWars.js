function findUniq(arr) {

  //check what unique numbers are in arr
  let uniqueArr = [...new Set(arr)];
  
  // variables to store counted occurences of unique nubers [uniqe number, occurences]
  let num1 = [uniqueArr[0], 1]; 
  let num2 = [uniqueArr[1], 1];

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] === num1[0]) num1[1]++;
    else num2[1]++;
  }

  //checks which number is really unique in array
  return (num1[1] === 1 ? num1[0] : num2[0])
}


let test = [ 0, 1, 0 ];
findUniq(test);