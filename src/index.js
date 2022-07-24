module.exports = function towelSort (matrix) {
  if (!matrix.length || !Array.isArray(matrix)) return [];

  let a = 1;
  const array = matrix.map(function(item, index){
    if(a === index) {
      a += 2;
      return item.reverse();
    } else {
      return item;
    }
  });

  return array.join().split(',').map(Number);
}
