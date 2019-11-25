/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  let seconds = 0;
  for(let i = 0; i < points.length - 1; i++){
      const [sx, sy] = points[i];
      const [nx, ny] = points[i + 1];

      const verticalDiff = Math.abs(ny - sy); // 3
      const horizontalDiff = Math.abs(nx - sx); // 2
      
      const straight = Math.abs(verticalDiff - horizontalDiff);
      const diagonal = verticalDiff > horizontalDiff ? horizontalDiff : verticalDiff;

      seconds += diagonal + straight;
  }
  return seconds;
};
