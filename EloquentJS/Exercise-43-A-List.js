
console.log('Tablica do listy:')

function arrayToList(tablica){
  let list = null;
  for (let i = tablica.length - 1; i >= 0; i--){
   list = {value: tablica[i], rest: list};
  }
  return list;
}

let daneTablicy = [1, 2, 3,];
console.log(arrayToList(daneTablicy));

console.log('Lista do tablicy:')

function listToArray(list){
  let array = [];
  for (let i = list; i; i = i.rest){
    array.push(i.value);
  }

  return array;
}

console.log(listToArray(arrayToList(daneTablicy)));

console.log('Funkcja prepend:');

function prepend(value, list) {
  return {value, rest: list};
}

console.log(prepend(6, arrayToList(daneTablicy)));
//console.log(prepend(10, prepend(20, null)));

console.log('Funkcja nth');

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}
console.log(nth(arrayToList([10, 20, 30, 556]), 3));