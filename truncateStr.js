function truncateString(str, num) {
    // Clear out that junk in your trunk

    if(num >= str.length){
        return str;
    }
    let arr = str.split('');
    let truncated = arr.splice(0, num);
    truncated.push('...');
    return truncated.join('');
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
