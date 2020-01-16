/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let sum = 0;
  for(let i = 0; i < height.length; i++){
    const h = height[i];
    const hr = height[i+1];
    if(h > hr){
      // found local maximum (a bounding bar)
      let maxh = 0;
      let maxind;
      // find index of next bounding bar
      for(let j = i + 1; j < height.length; j++){
        const h2 = height[j];
        if(h2 >= maxh){
          maxh = h2;
          maxind = j;
        }
        if(h2 >= h){
          break;
        }
      }
      // can calculate trapped between bounding bars
      sum += calculateTrapped(height, i, maxind);
      i = maxind - 1;
    }
  }
  return sum;
};

var calculateTrapped = function(height, i, j){
  let minSide = Math.min(height[i],height[j]);
  let sum = 0;
  for(let k = i + 1; k < j; k++){
    sum += minSide - height[k];
  }
  return sum;
}