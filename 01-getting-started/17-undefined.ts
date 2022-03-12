// Uninitialized variable
let value: number | undefined
console.log(value) // undefined

// Missing property
const person: any = {
    name: "John",
    age: 42,
}

console.log(person.address) // undefined


export {}
