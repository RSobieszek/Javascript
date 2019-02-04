let output = "";
let columnSize = 6, rowSize = 1;
for (let column = 1; column <= columnSize; column++){
  if (column % 2 == 0){
    for (let row = 1; row <= rowSize; row++){
      if (row % 2 == 0){
        output += " ";
      }
      else {
        output += "#";
      }
    }
  console.log(output);
  output = "";
  }
  else {
    for (let row = 1; row <= rowSize; row++){
      if (row % 2 == 0){
        output += "#";
      }
      else {
        output += " ";
      }
    }
  console.log(output);
  output = "";
  }
}