module.exports = function towelSort (matrix) {
    if(!Array.isArray(matrix) || matrix.length === 0) {
    return [] };

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
