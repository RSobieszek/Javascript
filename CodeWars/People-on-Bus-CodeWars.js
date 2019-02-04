// var number = function(busStops){
//   let pplIn = 0;
//   let pplOut = 0;
//   for (let element of busStops) {
//     pplIn += element[0];
//     pplOut += element[1];
//   }
//   return pplIn - pplOut;
// }

// var number = function(busStops){
//   return busStops.map(x => x.reduce((a,b) => a - b)).reduce((a,b) => a + b);
// }

var number = function(busStops){
  return busStops.reduce((total, [on,off]) => total + on - off,0);
}

let arrays = [[10,0],[3,5],[5,8]];
number(arrays);