function towelSort(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    i % 2 === 0 ? (res = res.concat(matrix[i])) : (res = res.concat(matrix[i].reverse()));
  }
  return res;
}



module.exports = function towelSort (matrix) {
  return [];
}
