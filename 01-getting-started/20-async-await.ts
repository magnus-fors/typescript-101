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
    await sleep(5000)
    console.log(now(), "after")
})()

export {}
