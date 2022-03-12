/**
 * Function with implicit return type.
 */
const say = (message: string) => {
    console.log(message)
}

say("Hello world!") // Hello world!

/**
 * Function with explicit return type.
 */
const shout = (message: string): void => {
    console.log(message.toUpperCase())
}

shout("Hello world!") // HELLO WORLD!

/**
 * Function with rest parameters.
 */
const chat = (sender: string, ...words: string[]) => {
    const sentence = words.join(" ")
    console.log(`${sender}: ${sentence}`)
}

chat("John", "Hello", "world!") // John: Hello world!


let log = (msg: string) => {
    console.log(msg)
}

log = (msg: string) => {
    console.log("INFO: " + msg)
}

log("Kalle was here!")

export {}
