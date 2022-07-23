function towelSort(arr) {
  let res = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 === 0) {
      res = `${res},${arr[i]}`;
    } else {
      res = `${res},${arr[i].reverse()}`;
    }
  }
  return res;
}



module.exports = function towelSort (matrix) {
  return [];
}
