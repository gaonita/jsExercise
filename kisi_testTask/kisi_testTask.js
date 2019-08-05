function capitalize(string) {
    let arr = string.toLowerCase().split(' ');
    let newStr = arr.map(e =>
        e.replace(e.charAt(0), e.charAt(0).toUpperCase())
    );
    return newStr.join(' ');
}

console.log(capitalize('HELLo world'));
