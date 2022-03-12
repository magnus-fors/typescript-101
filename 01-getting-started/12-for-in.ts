let fruits = ["apple", "orange", "pear"]

for (let x in fruits) {
    console.log(x) // 0, 1, 2
    console.log(fruits[x]) // apple, orange, pear
}

let person = { name: "Kalle", age: 34 }
for (let prop in person) {
    console.log(prop)
}

export {}
