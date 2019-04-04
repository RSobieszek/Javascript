function dirReduc(arr){
  // console.log(arr);
  for (let j = 0; j <= arr.length + 1; j++) {
    for (let i = 0; i < arr.length; i++) {
      if ((arr[i] === "NORTH" && arr[i + 1] === "SOUTH") || 
      (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") || 
      (arr[i] === "EAST" && arr[i + 1] === "WEST") || 
      (arr[i] === "WEST" && arr[i + 1] === "EAST")) {
        arr.splice(i, 2);
        // console.log(arr, `i: ${i}`, `j: ${j}`);
        break;
      }
    }
  }
  return arr;
}