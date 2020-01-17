/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const minHeap = new Heap(function(a,b){ return a.val < b.val; })
  for(let l of lists){
    if(l){
      minHeap.add(l);
    }
  }

  let mergedHead = null;
  let mergedTail = null;
  while(minHeap.size()){
    const min = minHeap.pop();
    if(min && min.next){
      minHeap.add(min.next);
    }
    if(!mergedHead){ mergedHead = mergedTail = min; }
    else{ mergedTail = mergedTail.next = min; }
  }

  return mergedHead;
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