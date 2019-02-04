s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

s1 = s.split(';');
s2 = s1.map((x) => x.split(':'));

// nazwiska pierwsze oraz uppercase
s2.forEach(function(x) {
  let y = x[1].toUpperCase();
  x[1] = x[0].toUpperCase();
  x[0] = y;
})

function comparator(a, b) {
   if (a[0] < b[0]) return -1;
   if (a[0] > b[0]) return 1;
   if (a[1] < b[1]) return -1;
   if (a[1] > b[1]) return 1;
   return 0;
 }

s2 = s2.sort(comparator);

s3 = s2.map((x) => x.join(', '));

let final = (arr) => {
  let result = '';
  for (let element of arr) {
    result += '(' + element + ')';
  }
  return result;
}

console.log(final(s3));




// console.log(s3);
// console.log(s2.toString());

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"