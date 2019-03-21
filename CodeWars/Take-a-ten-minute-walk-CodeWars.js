function isValidWalk(walk) {
  let coordinates = [0, 0]; 

  if (walk.length === 10){
    for (let move of walk){
      if (move === 'n') coordinates[0] += 1;
      if (move === 's') coordinates[0] -= 1;
      if (move === 'e') coordinates[1] += 1;
      if (move === 'w') coordinates[1] -= 1;
    }

    if (coordinates.filter(element => element === 0).length != 2) {
      return false;
    } else return true;
  } else return false;
}

let test = ['n','s','n','s','n','s','n','s','n','s'];
isValidWalk(test);