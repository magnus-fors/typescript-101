const sleep = async (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const now = () => {
    return new Date().toTimeString()
}

// We need to wrap the code in self invoking function
// since Node.js doesn't allow us to await on the global
// scope
;(async () => {
    console.log(now(), "before")
    let a = sleep(5000)
    let b = sleep(5000)
    let c = sleep(5000)
    await Promise.all([a, b, c])
    console.log(now(), "after")
})()

export {}
