/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const frequencyMap = new Map();
  for(let n of nums){
      frequencyMap.set(n, 1 + (frequencyMap.get(n) || 0));
  }

  var minHeap = new MinHeap(function(a,b){return a.value > b.value});
  frequencyMap.forEach(function(value, key){
    if(minHeap.size() < k){
      minHeap.add({value, key});
    }
    else if(value > minHeap.peek().value){
      minHeap.replaceMin({value, key});
    }
  })
  
  return minHeap.heap.map(function(e){
    return e.key;
  });
};


class MinHeap{
  constructor(comparator){
    this.heap = [];
    this.comparator = comparator;
  }
  
  peek(){
    return this.heap[top];
  }
  
  size(){
    return this.heap.length;
  }

  add(val){
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }
  
  replaceMin(val){
    this.heap[top] = val;
    this.bubbleDown(top);
  }
  
  bubbleUp(i){
    while(i > top && this.comparator(this.heap[parent(i)], this.heap[i])){
      this.swap(i, parent(i));
      i = parent(i);
    }
  }
  
  bubbleDown(i){
    while(
      (left(i) < this.heap.length && 
      this.comparator(this.heap[i], this.heap[left(i)])) ||
      (right(i) < this.heap.length &&
      this.comparator(this.heap[i], this.heap[right(i)]))
    ){
      var minInd = left(i);
      if(right(i) < this.heap.length && 
         this.comparator(this.heap[left(i)], this.heap[right(i)])){
        minInd = right(i);
      }
      this.swap(i, minInd);
      i = minInd;
    }
  }
  
  swap(i, j){
    var temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}

var top = 0;

var parent = function(i){
  return ((i + 1) >>> 1) - 1;
}

var left = function(i){
  return (i << 1) + 1;
}

var right = function(i){
  return (i + 1) << 1;
}