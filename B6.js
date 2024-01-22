function fakeFind(arr, fn) {
  for(let index in arr) {
    if (fn(arr[index], index)) {
      return arr[index];
    }
  }
}
const result = fakeFind([1, 4, 5, 6, 2], function(e, i) {
  return e % 2 == 0;
});
console.log(result);