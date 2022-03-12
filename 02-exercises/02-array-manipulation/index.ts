// In this exercise we implement the functions
// "insertAtFirstPosition" and "appendAtLastPosition". The
// functions accepts an array of strings, adds a new item,
// and returns it to the caller.

const insertAtFirstPosition = (items: string[], item: string): string[] => {
    return [item, ...items]
}

const appendAtLastPosition = (items: string[], item: string): string[] => {
    //items.push(item)
    //return items
    return [...items, item]
}

let fruits = ["apple", "orange", "pear"]
console.log(fruits) // [ "apple", "orange", "pear" ]

fruits = insertAtFirstPosition(fruits, "melon")
console.log(fruits) // [ "melon", "apple", "orange", "pear" ]

fruits = appendAtLastPosition(fruits, "grape")
console.log(fruits) // [ "melon", "apple", "orange", "pear", "grape" ]

export {}
