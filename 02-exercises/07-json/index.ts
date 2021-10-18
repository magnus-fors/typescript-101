// In this exercise we implement the functions "toJson" and
// "fromJson" to serialize and deserialize JavaScript
// objects.

const toJson = (item: unknown): string => {
    throw new Error("Not implemented")
}

const fromJson = (json: string): unknown => {
    throw new Error("Not implemented")
}

interface Person {
    name: string
    age: number
}

let person: Person = {
    name: "John",
    age: 42,
}

const json = toJson(person)
console.log(json) // {"name":"John","age":42}

person = fromJson(json) as Person
console.log(person) // { name: "John", age: 42 } or { name: 'John', age: 42 }

export {}
