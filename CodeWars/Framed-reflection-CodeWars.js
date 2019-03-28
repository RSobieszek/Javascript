function mirror(text){
  // Change position of words (mirroring words)
  let reflectedWords = text.split(' ') 
                      .reverse();

  //Finding how big the frame will be
  let longest = reflectedWords.reduce(function (a, b) { return a.length > b.length ? a : b; }).length + 4;

  //Creating top and bottom frame line
  let frame = '*'.repeat(longest);

  // Mirroring letters
  let reflectedLetter = reflectedWords.join(' ')
                                      .split('')
                                      .reverse();

  reflectedLetter.push(' ');

  // Finding spaces to add \n
  let count = 0;
  let emptySpace = 0;
  for (let i = 0; i < reflectedLetter.length; i++){
    if (reflectedLetter[i] !== ' ') {
      count++;
      // Poor and not intuitive way to add empty spaces between short words and right frame
    } else {
      emptySpace = longest - 3 - count;
      reflectedLetter[i] = ' '.repeat(emptySpace) + '*\n* ';
      count = 0;
      emptySpace = 0;
    }
    // count = 0;
  }

  // Adding frame
  let last = undefined;
  // Adding top frame
  reflectedLetter.unshift(frame, '\n* ');
  // Really horrible code to add bottom frame
  last = reflectedLetter[reflectedLetter.length - 1];
  last = last.slice(0, -2);
  reflectedLetter[reflectedLetter.length - 1] = last;
  reflectedLetter.push(frame);

  // Creating final string
  let reflected = reflectedLetter.join('');

  return reflected;
}

const test = 'Hello   dlkfjsd lk World d';
console.log(mirror(test));
