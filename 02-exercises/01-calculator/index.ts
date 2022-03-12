// In this exercise we implement basic arithmetic. Please
// implement the functions "add", "subtract", "multiply" and
// "divide".

const add = (x: number, y: number): number => {
    return x + y
}

const subtract = (x: number, y: number): number => {
    return x - y
}

const multiply = (x: number, y: number): number => {
    return x * y
}

const divide = (x: number, y: number): number => {
    return x / y
}

let result = add(4, 3)
console.log(result) // 7

result = subtract(71, 11)
console.log(result) // 60

result = multiply(5, 2.5)
console.log(result) // 12.5

result = divide(33, 4)
console.log(result) // 8.25

export {}
