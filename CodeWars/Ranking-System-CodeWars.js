function rankings(arr){
  let output = []; // final marks / ranks
  let rank = []; //marks / ranks given to sorted array elements
  let sorted = [...arr].sort((a,b) => {return a - b}); // sorted input array
  
  //giving rank to sorted array elements
  for (let i = 0; i < sorted.length; i++) {
    rank.unshift(i + 1);
  }
  
  output = new Array(sorted.length);
  
  // putting ranks on the right place in array
  for (j = 0; j < sorted.length; j++) {
    output[arr.indexOf(sorted[j])] = rank[j];
  }
  
  return output;
}


let array = [1, 10, 5]; //3, 1, 2
rankings(array);
