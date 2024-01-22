function check(arr, n) {
    let array = [];
    for (let i = 0; i < arr.length; i += n) {
      array.push(arr.slice(i, i + n));
    }
    return array;
  }
console.log(check(["a", "b", "c", "d"], 2));