// List of connections between places. Places are shortened to first letter:
const roads = ["A-B","A-C","A-P","B-T","D-E","D-T","E-G","G-F","G-S","M-F","M-P","M-S","M-T","S-T"];

// Function that builds graph from array:
function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

// Displaing graph/ road connections
const roadGraph = buildGraph(roads);
console.log('Graph:');
console.log(roadGraph);

// creating object that reflects Village state. Where the robot is, where and what are the parcels.
class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

// map function does the moving / filter function does delivering
  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;
        return {place: destination, address: p.address};
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

// creating starting state where the robot is and where the parcels are
let start = new VillageState(
  "P",
  [{place: "C", address: "B"}, {place: "P", address: "B"}]
);

// pick random key name from object
const randomKey = function (obj) {
    let keys = Object.keys(obj);
    let key = keys[Math.floor(Math.random()*keys.length)]
    return key;
};

// console.log(start.parcels.length);
// console.log(randomKey(roadGraph));

// Actual Robot work. Delivering. Also shows how many turns were made until all parcels were delivered.
// It's not very efficient. 26 turns is the record. Also 725 is the record.
let moveArr = [start];
for(let turn = 0; ; turn++) {
  if (moveArr[turn].parcels.length == 0) {
    console.log(`Delivery made in ${turn} turns`);
    break;
  }
  moveArr.push(moveArr[turn].move(randomKey(roadGraph)));
}
// console.log(moveArr);
// console.log(moveArr[moveArr.length - 1]);



// // moving and delivering made by hand
// let next = first.move("M");
// let next1 = next.move("F");
// let next2 = next1.move("M");
// let next3 = next2.move("P");
// let next4 = next3.move("A");
// let next5 = next4.move("C");
// let next6 = next5.move("A");
// let next7 = next6.move("B");

// console.log(first);
// console.log(next);
// console.log(next1);
// console.log(next2);
// console.log(next3);
// console.log(next4);
// console.log(next5);
// console.log(next6);
// console.log(next7);