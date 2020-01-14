// linked list
// map to nodes
// key => node
// remove node from list
// place back in front
var MappedListNode = function(key, val){
  this.key = key;
  this.val = val;
  this.next = null;
  this.prev = null;
};

/**
* @param {number} capacity
*/
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.head = null;
  this.tail = null;
  this.nodemap = new Map();
};

LRUCache.prototype.print = function(){
  let node = this.head;
  let a = [];
  while(node){
      a.push(node.key + ':' + node.val);
      node = node.next;
  }
  console.log(a.join(', '));
  a = [];
  node = this.tail;
  while(node){
      a.push(node.key + ':' + node.val);
      node = node.prev;
  }
  console.log(a.join(', '));
  console.log(this.head ? this.head.key : null);
  console.log(this.tail ? this.tail.key : null);
}

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  console.log('getting ' + key);
  console.log('before');
  this.print();
  const node = this.nodemap.get(key);
  if(!node){ return -1; }
  if(this.head === this.tail || this.head === node){
      return node.val;
  }
  
  // temp remove node from list
  if(node.next === null){
      // is tail
      this.tail = this.tail.prev;
      this.tail.next = null;
  }
  else{
      node.prev.next = node.next;
      node.next.prev = node.prev;
  }

  // place in front
  node.next = this.head;
  this.head.prev = node;
  this.head = node;
  this.head.prev = null;
  console.log('after');
  this.print();
  return this.head.val;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  console.log('put ' + key + '=>' + value);
  console.log('before');
  this.print();
  console.log(this.head ? this.head.key : null);
  console.log(this.tail ? this.tail.key : null);
  let node;
  if(this.nodemap.has(key)){
      // update existing node
      node = this.nodemap.get(key);
      node.val = value;
      if(node !== this.head){
          if(node === this.tail){
              this.tail = this.tail.prev;
          }
          node.prev.next = node.next;
          node.next.prev = node.prev;
          node.next = this.head;
          this.head.prev = node;
          this.head = node;
          this.head.prev = null;
      }
  }
  else{
      // check if deletion required
      if(this.size + 1 > this.capacity){
          this.print();
          const deletenode = this.tail;
          console.log('deleting');
          console.log(deletenode.key, deletenode.val);
          this.print();
          if(this.tail === this.head){
              // single node, capacity was 1
              console.log('here');
              this.tail = null;
              this.head = null;
          }
          else{
              this.tail = this.tail.prev;
              this.tail.next = null;
          }

          this.nodemap.delete(deletenode.key);
          this.size--;
      }
      node = new MappedListNode(key, value);
      this.nodemap.set(key, node);
      if(!this.head){
          this.head = node;
          this.tail = node;
      }
      else{
          node.next = this.head;
          this.head.prev = node;
          this.head = node;
          this.head.prev = null;
      }
      this.size++;
  }
  console.log('after');
  this.print();
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

let atest = [[10,13],[3,17],[6,11],[10,5],[9,10],[13],[2,19],[2],[3],[5,25],[8],[9,22],[5,5],[1,30],[11],[9,12],[7],[5],[8],[9],[4,30],[9,3],[9],[10],[10],[6,14],[3,1],[3],[10,11],[8],[2,14],[1],[5],[4],[11,4],[12,24],[5,18],[13],[7,23],[8],[12],[3,27],[2,12],[5],[2,9],[13,4],[8,18],[1,7],[6],[9,29],[8,21],[5],[6,30],[1,12],[10],[4,15],[7,22],[11,26],[8,17],[9,29],[5],[3,4],[11,30],[12],[4,29],[3],[9],[6],[3,4],[1],[10],[3,29],[10,28],[1,20],[11,13],[3],[3,12],[3,8],[10,9],[3,26],[8],[7],[5],[13,17],[2,27],[11,15],[12],[9,19],[2,15],[3,16],[1],[12,17],[9,1],[6,19],[4],[5],[5],[8,1],[11,7],[5,2],[9,28],[1],[2,2],[7,4],[4,22],[7,24],[9,26],[13,28],[11,26]];
const c = new LRUCache(10);
for(let t of atest){
  if(t.length == 2){
    c.put(t[0], t[1]);
  }
  else{
    //console.log('get ' + t[0] + ', ' + c.get(t[0]));
  }
}