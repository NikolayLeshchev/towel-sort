function towelSort(arr) {
    
if (!matrix.length || !Array.isArray(matrix)) return [];

  let i = 1;
  const arr = matrix.map(function(item, index) {
    if (i === index){
      i += 2;
      return item.reverse();
    } else {
      return item;
    }
  });

  return arr.join().split(',').map(Number);
}



module.exports = function towelSort (matrix) {
  return [];
}
