const triplets = (arr = [-1, 0, 1, 2, -1, 4]) => {

    const uniqueTriplets = []

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                const triplet = `${arr[i]}, ${arr[j]}, ${arr[k]}`
                if (arr[i] + arr[j] + arr[k] === 0 && !uniqueTriplets.includes(triplet)) {
                    uniqueTriplets.push(triplet)
                }
            }
        }
    }


}

console.log(triplets())