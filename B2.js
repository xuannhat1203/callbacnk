function find(...arrays) {
    let number = [];
    for (let array of arrays) {
      let max = array[0];
      for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
          max = array[i];
        }
      }
      number.push(max);
    }
    return number;
  }
let array1 = [3, 9, 2, 5];
let array2 = [12, 6, 8, 4];
let array3 = [7, 1, 10, 15];
console.log(find(array1, array2, array3));