function reverse(str) {
    if (!str.length) return str

    const reverseString = []
    for (let index = str.length - 1; index >= 0; index--) { // T: O(n), S: O(n)
        reverseString.push(str[index]) 
    }
    
    return reverseString.join('')
}

console.log(reverse("Hola yo soy daniel"))