const add = (...values: number[]): number => {
    let sum = 0
    
    for (const value of values) {
        sum += value
    }

    return sum
}

// Because of rest parameters we can pass the values
// without having to wrap them into an array
const sum = add(1, 3, 5, 7)
console.log(sum) // 16