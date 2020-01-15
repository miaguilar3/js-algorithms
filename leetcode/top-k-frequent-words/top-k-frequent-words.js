/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  var freqMap = new Map();
  for(let w of words){
    freqMap.set(w, (freqMap.get(w) || 0) + 1);
  }

  const minHeap = new Heap(function(a,b){
    if(freqMap.get(a) === freqMap.get(b)){
      return a > b;
    }
    return freqMap.get(a) < freqMap.get(b);
  });
  
  freqMap.forEach(function(value, key){
    minHeap.add(key);
    if(minHeap.size() > k){
      minHeap.pop();
    }
  });
  
  const mostFrequent = [];
  while(minHeap.size() > 0){
    mostFrequent.push(minHeap.pop());
  }
  
  return mostFrequent.reverse();
};

const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

class Heap{
  constructor(comparator){
    this.heap = [];
    this.comparator = comparator;
  }
  
  add(v){
    this.heap.push(v)
    this.bubbleUp(this.heap.length - 1);
  }
  
  pop(){
    if(this.heap.length === 1){
      return this.heap.pop();
    }
    
    const t = this.heap[top];
    this.heap[top] = this.heap.pop();
    this.bubbleDown(top);
    return t;
  }
  
  size(){
    return this.heap.length - top;
  }
  
  bubbleUp(i){
    while(i > top && this.comparator(this.heap[i], this.heap[parent(i)])){
      this.swap(i, parent(i));
      i = parent(i);
    }
  }
  
  bubbleDown(i){
    while(
      left(i) < this.heap.length && this.comparator(this.heap[left(i)], this.heap[i]) ||
      right(i) < this.heap.length && this.comparator(this.heap[right(i)], this.heap[i])
    ){
      let maxIndex = left(i);
      if(
        right(i) < this.heap.length && 
        this.comparator(this.heap[right(i)], this.heap[left(i)])
      ){
        maxIndex = right(i);
      }
    
      this.swap(i, maxIndex);
      i = maxIndex;
    }
  }
  
  replaceMin(v){
    this.heap[top] = v;
    this.bubbleDown(top);
  }
  
  peek(){
    return this.heap[top];
  }
  
  swap(i, j){
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}

