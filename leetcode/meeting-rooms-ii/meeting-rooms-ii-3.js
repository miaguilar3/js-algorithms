/**
 * Two pointer approach. Sort start times, sort end times.
 * Initialize start and end pointers/indices to zero.
 * Iterate through start times, if the current start comes
 * after the current end time, then we know a meeting has finished,
 * and a room is available. If not, then our room count must be incremented.
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  if(intervals.length === 0){ return 0; }
  const starts = intervals.sort((a,b)=>{
      return parseInt(a[0]) - parseInt(b[0]);
  }).map(i=>(i[0]));
  
  const ends = intervals.sort((a,b)=>{
      return parseInt(a[1]) - parseInt(b[1]);
  }).map(i=>(i[1]));
  
  let si = 0, ei = 0, rooms = 0;
  while(si < starts.length){
      if(starts[si] >= ends[ei]){
          si++; ei++;
      }
      else{
          si++; rooms++;
      }
  }
  
  return rooms;
};
