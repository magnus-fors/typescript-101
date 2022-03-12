import { v4 as uuidv4, v4 } from 'uuid';
// In this exercise we implement the function "createId",
// which creates and returns an universally unique
// identifier.
//
// Generating unique identifiers is not easy, thus you
// should take a dependency on the package "uuid"
// (https://www.npmjs.com/package/uuid) and generate UUIDs
// of version 4 using that package.
//
// The "uuid" package does not contain any TypeScript
// definitions, please pay attention to the help VS Code is
// trying to give you in that respect.

/**
 * Returns a UUID of version 4.
 */
const createId = (): string => {
    return uuidv4()
}

const id = createId()
console.log(id) // XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX (where X is a hexadecimal number)

export {}
