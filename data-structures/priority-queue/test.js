var PriorityQueue = require('./priority-queue');

var pq = new PriorityQueue();
pq.push([50, 40, 30, 60, 20]);
console.log('Top:', pq.peek()); //=> 50
console.log('Size:', pq.size()); //=> 5
console.log('Contents:');
while (!pq.isEmpty()) {
  console.log(pq.pop()); //=> 40, 30, 20, 10
}

// Pairwise comparison semantics
const pqPair = new PriorityQueue(((a, b) => (a[1] > b[1])));
let a = [4,7]
pqPair.push([[1, 10], [2, 5], [3, 12], a]);
pqPair.replaceReference(a, [4,1]);
console.log('\nContents:');
while (!pqPair.isEmpty()) {
  console.log(pqPair.pop()); //=> 'high', 'medium', 'low'
}