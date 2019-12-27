/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  if(intervals.length === 0){ return 0; }
  intervals = intervals.sort((a,b)=>{
      return parseInt(a[0]) < parseInt(b[0]) ? -1 : 1;
  });
  
  const rooms = [];
  for(let i = 0; i < intervals.length; i++){
      // look for a room not taken
      let bfound = false;
      for(let r = 0; r < rooms.length; r++){
          if(intervals[i][0] >= rooms[r][rooms[r].length - 1][1]){
              rooms[r].push(intervals[i]);
              bfound = true;
              break;
          }
      }
      if(!bfound){
          rooms.push([intervals[i]]);
      }
  }

  return rooms.length;
};

