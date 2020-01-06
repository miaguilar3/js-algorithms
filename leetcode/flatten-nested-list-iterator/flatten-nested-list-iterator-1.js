/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
var peekArr = function(arr){
  return arr[arr.length - 1];
}

var incrementTop = function(arr){
  arr[arr.length - 1]++;
}

/**
* @constructor
* @param {NestedInteger[]} nestedList
*/
var NestedIterator = function(nestedList) {
  this.listStack = [nestedList];
  this.indexStack = [0];
  this.pointToNext();
};

NestedIterator.prototype.pointToNext = function(){
  if(this.listStack.length === 0){ return false; }
  let index = peekArr(this.indexStack);
  let list = peekArr(this.listStack);
  for(let i = index; i < list.length; i++){
      if(list[i] == null){
          return false;
      }
      if(list[i].isInteger()){
          return true;
      }
      else{
          incrementTop(this.indexStack);
          this.listStack.push(list[i].getList());
          this.indexStack.push(0);
          if(this.pointToNext()){
              return true;
          }
          this.cleanStack();
      }
  }
  this.cleanStack();
  return false;
}

/**
* @this NestedIterator
* @returns {boolean}
*/
NestedIterator.prototype.hasNext = function() {
  return this.listStack.length > 0;
};

NestedIterator.prototype.cleanStack = function(){
  let index = this.indexStack[this.indexStack.length - 1];
  let list = this.listStack[this.listStack.length - 1];
  while(this.listStack.length && index >= list.length){
      this.listStack.pop();
      this.indexStack.pop();
      index = this.indexStack[this.indexStack.length - 1];
      list = this.listStack[this.listStack.length - 1];
  }
}

/**
* @this NestedIterator
* @returns {integer}
*/
NestedIterator.prototype.next = function() {
  let index = this.indexStack[this.indexStack.length - 1];
  let list = this.listStack[this.listStack.length - 1];
  let int = list[index].getInteger();
  incrementTop(this.indexStack);
  this.cleanStack();
  this.pointToNext();
  return int;
};


/**
* Your NestedIterator will be called like this:
* var i = new NestedIterator(nestedList), a = [];
* while (i.hasNext()) a.push(i.next());
*/