
function towelSort(arr) {
  let res = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    res = `${res},${arr[i]}`;
  }
  return res;
}



module.exports = function towelSort (matrix) {
  return [];
}
