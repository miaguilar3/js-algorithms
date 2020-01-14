/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let seenSet  = new Set();
  
  while(n !== 1 && !seenSet.has(n)){
    seenSet.add(n);
    let next = 0;
    while(n !== 0){
      let digit = n % 10;
      n = Math.floor(n / 10);
      next += digit * digit;
    }
    n = next;
  }
  
  return n === 1;
};