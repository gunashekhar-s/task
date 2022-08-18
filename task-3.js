const palindromeString = (str) => {
    return str.toLowerCase() === str.toLowerCase().split("").reverse().join("")
}

// console.log(palindromeString("Level"))

