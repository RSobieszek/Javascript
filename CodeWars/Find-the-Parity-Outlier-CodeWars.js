function findOutlier(integers){
  let even = []
  let odd = []
  integers.forEach(num => num % 2 === 0 ? even.push(num) : odd.push(num))
  return even.length === 1 ? even[0] : odd[0]
}

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]) //11

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)