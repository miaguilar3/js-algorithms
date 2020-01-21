/*

Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

Input: [1, 2, 3, 4]
Output:
[
  [1, 2, 3, 4],
  [1, 2, 4, 3],
  [1, 3, 2, 4],
  [1, 3, 4, 2],
  [1, 4, 2, 3],
  [1, 4, 3, 2],
  ...
]

*/

var permutations = function(ints){
  const ans = [];
  
  var permutationsHelper = function(arr, unusedSet){
    if(unusedSet.size === 0){
      ans.push(Array.from(arr));
    }
    else{
      Array.from(unusedSet).forEach(function(i){
        unusedSet.delete(i);
        arr.push(i)
        permutationsHelper(arr, unusedSet);
        arr.pop();
        unusedSet.add(i);
      });      
    }
  }
  
  permutationsHelper([], new Set(ints));
  
  return ans;
}

function perm(arr) {
  if (arr.size < 2) {
    return [Array.from(arr)];
  }
  
  let result = [];
  let set = new Set(arr);
  
  for (let i of arr) {
    set.delete(i);
    let subperms = perm(set);
    for (let subperm of subperms){
      result.push([i].concat(subperm));
    }
    set.add(i);
  }
  
  return result;
}

console.log(permutations([1,2,3]))
console.log(perm([1, 2, 3]))

// run time = space complexity = O(n!)


// say n ints input
// how many permutations?
// 2^n
// n * n-1 * n-2 * ... 1 <--- this is factorial of n
// 

// [1] -> 1
// [1, 2] -> 2
// [1, 2, 3] -> 6
// [1, 2, 3, 4] -> 24
// n!
// O(n!) <--- can't do any better because we have to generate all n!