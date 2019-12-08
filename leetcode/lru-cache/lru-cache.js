/**
 * Implements LRU Cache using a map to nodes which make up a doubly linked list.
 * Nodes contain the cached values, and are ordered by recent use.
 * Most recently used as the head, and least recently used as tail;
 * When adding to cache, a node is added to the front of the list in O(1).
 * When deleting from cache, the tail node is removed from the list in O(1).
 * When accessing the cache, the map allows O(1) access to nodes/values.
 * The doubly linked list structure allows us to move a node to the front of
 * the list whenever it is accessed in O(1) time. 
 */


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

LRUCache.prototype.removeNode = function(node){
    if(this.head === this.tail){
        this.head = null;
        this.tail = null;
    }
    else if(this.head === node){
        this.head = node.next;
        this.head.prev = null;
    }
    else if(this.tail === node){
        this.tail = node.prev;
        this.tail.next = null;
    }
    else{
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
};

LRUCache.prototype.moveToFront = function(node){
    if(!this.head){
       this.head = node;
       this.tail = node;
    }
    else if(this.head !== node){
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.head.prev = null;
    }
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  const node = this.nodemap.get(key);
  if(!node){ return -1; }
  if(this.head !== node){
      this.removeNode(node);  
      this.moveToFront(node);
  }
  return this.head.val;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  let node;
  if(this.nodemap.has(key)){
      // update existing node
      node = this.nodemap.get(key);
      node.val = value;
      if(node !== this.head){
          this.removeNode(node);
          this.moveToFront(node);
      }
  }
  else{
      // check if deletion required
      if(this.size + 1 > this.capacity){
          const deletekey = this.tail.key;
          this.removeNode(this.tail);
          this.nodemap.delete(deletekey);
          this.size--;
      }
      // add a new node to front
      node = new MappedListNode(key, value);
      this.nodemap.set(key, node);
      this.moveToFront(node);
      this.size++;
  }
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/