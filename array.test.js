const clArray = require("./array");
let dsarray = new clArray.Array();

let array = [1, 2, 3];

//toBe(), toBeTruthy(), toStrictEqual()

test('access ok', () => {
    expect(dsarray.access(array, 0)).toBe(1);
})

test('insertion (tails) ok', () => {
    expect(dsarray.insert(array, 4)).toStrictEqual([ 1, 2, 3, 4 ]);
})

test('insertion to head ok', () => {
    expect(dsarray.insertToHead(array, 0)).toStrictEqual([ 0, 1, 2, 3, 4 ]);
})

test('search ok', () => {
    expect(dsarray.search(array, 2)).toBe(2);
})

test('remove ok', () => {
    expect(dsarray.remove(array, 1)).toStrictEqual([ 0, 2, 3, 4 ]);
})