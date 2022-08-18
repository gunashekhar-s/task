const triplets = (arr) => {

    const uniqueTriplets = []

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                const triplet = `${arr[i]}, ${arr[j]}, ${arr[k]}\n`
                if (arr[i] + arr[j] + arr[k] === 0 && !uniqueTriplets.includes(triplet)) {
                    uniqueTriplets.push(triplet)
                }
            }
        }
    }
    return uniqueTriplets.join("")
}

console.log(triplets())