// In this exercise we implement the foobar game, commonly
// seen on job interviews.
//
// Please implement the "fooBar" function to successfully
// print the following sequence to console.
//
// 1
// 2
// foo
// 4
// bar
// foo
// 7
// 8
// foo
// bar
// 11
// foo
// 13
// 14
// foobar
// 16
// 17
// foo
// 19
// bar

/**
 * Returns
 * - "foo" if 3 is a factor of x
 * - "bar" if 5 is a factor of x
 * - "foobar" if both 3 and 5 are factors of x
 * - x is any other case
 */
const fooBar = (x: number): "foo" | "bar" | "foobar" | number => {
    if (x % 15 === 0) {
        return "foobar"
    } else if (x % 3 === 0) {
        return "foo"
    } else if (x % 5 === 0) {
        return "bar"
    } else {
        return x
    }
}

for (let number = 1; number <= 20; number++) {
    const result: number | string = fooBar(number)

    // 1, 2, foo, 4, bar,
    // foo, 7, 8, foo, bar,
    // 11, foo, 13, 14, foobar,
    // 16, 17, foo, 19, bar
    console.log(result)
}

export {}
