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

/**
* @constructor
* @param {NestedInteger[]} nestedList
*/
var NestedIterator = function(nestedList) {
  // stack can have intgers or lists
  this.stack = [];
  this.addToStack(nestedList);
  this.clearStackUntilInt();
};

NestedIterator.prototype.addToStack = function(nestedList){
  for(let i = nestedList.length - 1; i >= 0; --i){
      this.stack.push(nestedList[i]);
  }
}

NestedIterator.prototype.clearStackUntilInt = function(){
  if(!this.stack.length){ return; }
  
  let top = peekArr(this.stack);
  while(this.stack.length && !top.isInteger()){
      this.addToStack(this.stack.pop().getList());
      top = peekArr(this.stack);
  }
}

/**
* @this NestedIterator
* @returns {boolean}
*/
NestedIterator.prototype.hasNext = function() {
  return this.stack.length > 0;
};

/**
* @this NestedIterator
* @returns {integer}
*/
NestedIterator.prototype.next = function() {
  const pop = this.stack.pop();
  this.clearStackUntilInt();
  return pop.getInteger();
};

/**
* Your NestedIterator will be called like this:
* var i = new NestedIterator(nestedList), a = [];
* while (i.hasNext()) a.push(i.next());
*/