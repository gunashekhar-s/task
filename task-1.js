function maxSum(k, n, arr) {


    if (k === 0 || arr.length === 0 || n === 0) return 0;

    const uniqueNumbers = []
    let total = 0

    arr.sort((a, b) => b - a)

    for (let i = 0; i < n; i++) {
        if (uniqueNumbers.length < k) {
            if (!uniqueNumbers.includes(arr[i])) {
                uniqueNumbers.push(arr[i])
            }
            total += arr[i]
        } else if ((uniqueNumbers.length === k) && uniqueNumbers.includes(arr[i])) {
            total += arr[i]
        }
    }

    return total

}

console.log(maxSum())

