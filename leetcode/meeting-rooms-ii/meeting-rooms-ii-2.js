/**
 * 
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  if(intervals.length === 0){ return 0; }
  intervals = intervals.sort((a,b)=>{
      return parseInt(a[0]) < parseInt(b[0]) ? -1 : 1;
  });
  
  let pq = new PriorityQueue((a,b)=>(a[1] > b[1]));
  pq.push(intervals[0]);
  for(let i = 1; i < intervals.length; i++){
      // meeting starts after earliest ending meeting
      //  that already has a room booked
      if(intervals[i][0] >= pq.peek()[1]){
          pq.replaceMin(intervals[i]);
      }
      else{
          pq.push(intervals[i]);
      }
  }
  
  return pq.size();
};

const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

class PriorityQueue{
  constructor(comparator = (a,b)=>(a > b)){
    this.heap = [];
    this.comparator = comparator;
    this.indexMap = new Map();
  }

  greater(a, b){
    return this.comparator(a,b);
  }

  size(){
    return this.heap.length - top;
  }

  isEmpty(){
    return this.heap.length - top === 0;
  }

  peek(){
    return this.heap[top];
  }

  pop(){
    const popped = this.heap[top];
    if(!this.size()){ throw new Error('Cannot Pop From Empty Queue'); }
    this.swap(top, top + this.size() - 1);
    this.heap.pop();
    this.bubbleDown(top);
    return popped;
  }

  replaceMin(val){
    this.heap[top] = val;
    this.bubbleDown(top);
  }

  replaceReference(ref, newRef){
    const index = this.indexMap.get(ref);
    this.indexMap.set(newRef, index);
    this.indexMap.delete(ref);
    this.replaceAtIndex(index, newRef);
  }

  replaceAtIndex(i, val){
    if(i < top || i >= this.heap.length){
      throw new Error('Invalid Replace Index');
    }
    this.heap[i] = val;
    this.bubbleUp(i);
    this.bubbleDown(i);
  }

  reorderFrom(ref){
    // replace with itself, trigger bubbling
    this.replaceReference(ref, ref);
  }

  push(v){
      this.heap.push(v);
      this.indexMap.set(v, this.heap.length - 1);
      this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(i){
    while(i > top && this.greater(this.heap[parent(i)], this.heap[i])){
      this.swap(i, parent(i));
      i = parent(i);
    }
  }

  bubbleDown(i){
    while(
      (left(i) < this.heap.length && this.greater(this.heap[i], this.heap[left(i)])) ||
      (right(i) < this.heap.length && this.greater(this.heap[i], this.heap[right(i)]))
    ){
      // find which to swap
      let max = left(i);
      if(right(i) < this.heap.length && this.greater(this.heap[left(i)], this.heap[right(i)])){
        max = right(i);
      }
      
      this.swap(i, max);
      i = max;
    }
  }

  swap(i, j){
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
    this.indexMap.set(this.heap[i], i);
    this.indexMap.set(this.heap[j], j);
  }

};
