function range(start, end) {
  let array = [start];
  for (i=0; start < end; i++){
    start += 1;
    array.push(start);
  }
  return array;
}
console.log(range(2, 4));


function sum(tablica) {
  let sumaTablicy = 0
  for (i = 0; i < tablica.length; i++) {
    sumaTablicy += tablica[i];
    /*
    wez kolejne elementy z tablicy takiej i coś z nimi zrob
    for (let  )
    */
  }
  return sumaTablicy;
}
console.log(sum(range(1, 10)));

console.log('tutaj:')
//test innej notacji pętli wykonanej na tablicy:
function sum1(tablica) {
  let sumaTablicy = 0
  for (let i of tablica) { //chodzi o ten moment
    sumaTablicy += i;// mogę zapisać samo i zamiast tablica[i]. w tej notacji i to już jest tablica[i]
  }
  return sumaTablicy;
}
console.log(sum1(range(2, 4)));

//zadanie dodatkowe
function range1(start, end, step) {
  if (step == undefined) {
    step = 1;
  }
  if (start < end) {
    let array = [start];
    for (i = 0; start < end; i += step){
      start += step;
      if (start <= end) {
        array.push(start);
      }
    }
  return array;
  }
  else if (start > end && step < 0){
    step = -step;
    let array = [start];
    for (i = 0; start > end; i -= step){
      start -= step;
      if (start >= end) {
        array.push(start);
      }
    }
  return array;
  }
}
console.log(range1(2, 10, 2));
console.log(range1(10, 1, -3));
//console.log(sum1(range1(1, 10, 3)));





