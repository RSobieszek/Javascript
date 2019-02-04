// function rot13(message){
//   let arr = message.split('');
//   let arr2 = [];
//   arr.map();
// }


// let str = 'aAcdef';
// let arr = str.split('');
// console.log(arr);
function rot13(message) {

  message = message.split('');
  let input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  let output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('');

  for (let i = 0; i < message.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[j] === message[i]) {
        // console.log('I:', input [j], ' M:', message[i], ' O:', output[j]);
        message[i] = output[j];
        break;
        // console.log('I:', input [j], ' M:', message[i], ' O:', output[j]);
        // console.log('----------');
      }
    }
  }
  return message.join('');
  // console.log(input, output, message, message.join(''));
}

let str = 'ab23ABqQcd';
rot13(str);
// console.log(str.charCodeAt(0));
// console.log('abcdefghijklmnopqrstuvwxyz'.length);