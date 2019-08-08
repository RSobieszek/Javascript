function orderWeight(string) {
  if (string.length) {
    let stringToArray = string.split(' ') 
    // let stringLength = stringToArray.map(val => val.length)
    let weightSorted = stringToArray.map(val => val.split(''))
                                    .map(val => val.map(element => parseInt(element))
                                                  .reduce((acc, curVal) => acc + curVal)
                                    )
                                    .map((val, index) => [index, stringToArray[index], val])
                                    .sort((a, b) => a[2] === b[2] ? (a[1] > b[1] ? 1 : -1) : a[2] - b[2])

    let resultString = weightSorted.map(val => stringToArray[val[0]])
                                  .join(' ')
    return resultString
    
  } else return ''
}