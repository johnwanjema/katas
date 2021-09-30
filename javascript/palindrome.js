// Write a function that checks if a given string (case insensitive) is a palindrome.


// 'Abba' return true
// 'hello' return false
const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}


//method two
function isPalindrome(x) {
    x = x.toLowerCase()
    let reverseString = ''
    for (let i = x.length - 1; i >= 0; i--) {
        reverseString += x[i].toLowerCase()
    }
    return reverseString == x ? true : false
}


