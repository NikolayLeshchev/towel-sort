module.exports = function towelSort (matrix) {
  if ( !matrix.length || !Array.isArray(matrix)) return [];

  let a = 1;
  const arr = matrix.map(function(item, index){
    if (a === index) {
      a += 2;
      return item.reverse();
    } else {
      return item;
    }
  });

  return arr.join().split(',').map(Number);
}
