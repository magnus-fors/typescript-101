// In this exercise we implement the function "sevenBoom"
// that returns the string "Boom!" if any of the provided
// numbers contains the digit 7.

/**
 * Returns
 * - "Boom!" if the digit 7 exists in any of the numbers
 * - "The bomb is disarmed" in any other case
 */
const sevenBoom = (numbers: number[]): "Boom!" | "The bomb is disarmed" => {
    for (const item of numbers) {
        if (item.toString().indexOf("7") > -1) {
            return "Boom!"
        }
    }
    return "The bomb is disarmed"
}

let result = sevenBoom([1, 2, 3, 4, 5, 6, 7])
console.log(result) // Boom!

result = sevenBoom([8, 6, 33, 100])
console.log(result) // The bomb is disarmed

result = sevenBoom([2, 55, 60, 97, 86])
console.log(result) // Boom!

export {}
