/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  let letterLogs = [];
  let digitLogs = [];
  
  for(let log of logs){
      if(!isNaN(parseInt(log.split(' ')[1]))){
          digitLogs.push(log);
      }
      else{
          letterLogs.push(log);
      }
  }
  
  letterLogs.sort(function(a,b){
      if(a.split(' ').slice(1).join(' ') === b.split(' ').slice(1).join(' ')){
          return a < b ? -1 : 1;
      }
      return a.split(' ').slice(1).join(' ') < 
          b.split(' ').slice(1).join(' ') ? -1 : 1;
  });
  
  return letterLogs.concat(digitLogs);
};