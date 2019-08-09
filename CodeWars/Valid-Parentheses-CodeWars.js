function validParentheses(parens){
  let count = 0
  
  parens.split('').forEach(e => {
    if (count < 0) return false
    if (e === "(") count++
    if (e === ")") count--
  })
  
  return count === 0 ? true : false  
}

validParentheses("")
// validParentheses(")(()))")

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true