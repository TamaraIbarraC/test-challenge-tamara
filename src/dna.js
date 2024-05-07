/*
- Create a function to validate DNA strings as canonical DNA structure (e.g., `'CTAGGGTA'`).
  - Allow only canonical DNA bases `('C', 'T', 'A', 'G')`.
  - The function should be case-sensitive. Only accept uppercase bases.
  - Return empty string for invalid or empty inputs.
  - Return true if the string is a valid DNA sequence.

```js
isValidDNA("CTAG"); // should return true
isValidDNA("CTXG"); // should return false due to 'X'
isValidDNA("ctag"); // should return false due to lowercase
isValidDNA(""); // should return false for empty string
```
*/

function isValidDNA(str) {
    if (str.length === 0) {
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "C" && str[i] !== "T" && str[i] !== "A" && str[i] !== "G") {
            return false;
        }
    }
    return true;
}

console.log(isValidDNA("CTAG")); // should return true

console.log(isValidDNA("CTXG")); // should return false due to 'X'

console.log(isValidDNA("ctag")); // should return false due to lowercase

console.log(isValidDNA("")); // should return false for empty string

