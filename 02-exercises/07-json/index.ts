// In this exercise we implement the functions "toJson" and
// "fromJson" to serialize and deserialize JavaScript
// objects.

const toJson = (item: unknown): string => {
    return JSON.stringify(item)
}

const fromJson = (json: string): unknown => {
    return JSON.parse(json)
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
