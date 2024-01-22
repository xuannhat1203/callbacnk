function check(str, size) {
    return str.slice(0, str.length - size);
}
console.log(check("Hello world, I'm Peter", 11));