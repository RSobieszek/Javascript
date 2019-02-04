//funkcja tworząca nową tablicę
function reverseArray(tablica) {
  dane1 = [];
  let j = 0;
  for (let i = tablica.length - 1; i >= 0; i--){
    dane1[j] = tablica[i];
    j++;
  }
  return dane1;
}

dane = [3, 4, 5, 12, 45, 0];
console.log(reverseArray(dane));

//funkcja zmieniająca tablicę
function reverseArrayInPlace(tablica) {
  let c = 0;
  for (let i = 0; i < (Math.floor(tablica.length / 2)); i++){
    c = 0;
    c = tablica[i];
    tablica[i] = tablica[tablica.length - i - 1];
    tablica[tablica.length - i - 1] = c;
  }
return tablica;  
}
console.log('Funkcja swapująca tablicę:')
dane2 = [1, 2, 3, 4, 5, 522];
console.log(reverseArrayInPlace(dane2));

console.log('testy:')
let x = 9;
console.log(Math.floor(x/2));