function order(words){
  if (words) {
    let arr = words.split(' ')
    let numbers = arr.map(word => word.match(/\d+/)[0])
    let result = arr.map((word, index) => [numbers[index], word])
                    .sort((a,b) => a[0] - b[0])
                    .map(element => element[1])
                    .join(' ')
    return result
  } else return words
}

order("is2 Thi1s T4est 3a") // "Thi1s is2 3a T4est"