// lets say array
// insert? constant, but have to iterate to check if present.
// remove? have to iterate.
// random? constant

// map, insert/remove constant
// can't do random
// use both
// val => index

// insert - use map check if present, push to arr, add to map
// remove - use map get index, swap, pop, rm from map
// get random - math.random, return val at rand index
// all O(1)

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.arr = [];
  this.map = new Map();
};

/**
* Inserts a value to the set. Returns true if the set did not already contain the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if(this.map.has(val)){
      return false;
  }
  this.arr.push(val);
  this.map.set(val, this.arr.length - 1);
  return true;
};

/**
* Removes a value from the set. Returns true if the set contained the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  if(!this.map.has(val)){
      return false;
  }
  const ind = this.map.get(val);
  this.map.delete(val);
  this.arr[ind] = this.arr[this.arr.length-1];
  this.arr.pop();
  this.map.set(this.arr[ind], ind);
  return true;
};

/**
* Get a random element from the set.
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  const randind = Math.floor(Math.random() * Math.floor(this.arr.length));
  return this.arr[randind];
};

/** 
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/