function check(string, string2) {
    let size = string.length - string2.length;
    if (size < 0) {
      return false;
    }
    for (let i = 0; i < string2.length; i++) {
        if (string[size + i] !== string2[i]) {
            return false;
        }
    }
    return true;
}
let string1 = prompt("Nhap chuoi thu nhat");
let string2 = prompt("Nhap chuoi thu hai");
console.log(check(string1, string2));
