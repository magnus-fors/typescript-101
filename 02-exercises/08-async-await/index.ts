// In this exercise we implement the function "add" to add
// the values returned from two promises.
//
// Please mind that no code other than the body of "add"
// may be altered.

const sleep = async (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const simulateWorkAndReturn = async (value: number): Promise<number> => {
    await sleep(3000)

    return value
}

/**
 * Implement this function to add the values returned from the two promises.
 */
const add = async (x: Promise<number>, y: Promise<number>): Promise<number> => {
    throw new Error("Not implemented")
}

// We need to wrap the code in self invoking function
// since Node.js doesn't allow us to await on the global
// scope
;(async () => {
    const x = simulateWorkAndReturn(3)
    const y = simulateWorkAndReturn(4)
    
    const result = await add(x, y)

    console.log(result) // 7
})()

export {}
