let string = prompt("Nhap vao 1 chuoi");
let array = [];
let max = 0;
let count = 0;
for (let i = 0; i < string.length; i++) {
  array.push(string[i]);
}
for (let i = 0; i < array.length; i++) {
  if (array[i] != " ") {
    count++;
    if (count > max) {
      max = count;
    }
  } else {
    count = 0;
  }
}

console.log("Longest word length:", max);