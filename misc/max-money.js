/************************************* */
function maxMoney(a1, a2){
  return Math.max(
    maxAtIndex(a1, 0, a2), 
    maxAtIndex(a2, 0, a1)
  );
}

function maxAtIndex(a1, index, a2){
  if(index >= a1.length){
    return 0;
  }
  return a1[index] + 
    Math.max(
      maxAtIndex(a1, index + 1, a2),
      maxAtIndex(a2, index + 2, a1)
    );
}
/************************************ */
function maxMoney2(a1, a2){
  const max1 = Array.from(a1);
  const max2 = Array.from(a2);

  for(let i = max1.length - 2; i >= 0; --i){
    const nextmax1 = i + 1 >= a1.length ? 0 : a1[i+1];
    const skipmax1 = i + 2 >= a2.length ? 0 : a2[i+2];
    max1[i] = a1[i] + Math.max(nextmax1, skipmax1);

    const nextmax2 = i + 1 >= a2.length ? 0 : a2[i+1];
    const skipmax2 = i + 2 >= a1.length ? 0 : a1[i+2];
    max2[i] = a2[i] + Math.max(nextmax2, skipmax2);
  }

  return Math.max(max1[0] || 0, max2[0] || 0);
}
/************************************* */


const a1 = [ 10, 7, 14,  3, 23, 34, 65, 23, 67, 34, 45 ];
const a2 = [  2, 9, 12, 55, 22, 34, 54, 34, 65, 23, 34 ];

console.log(maxMoney(a1, a2));
console.log(maxMoney(a1, a2));