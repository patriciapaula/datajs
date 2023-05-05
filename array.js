class Array {

    constructor() {

    }

    access(array, index) {
        return array[index];
    }

    search(array, element) {
        for (let index = 0; index < array.length; index++) {
            if (element === array[index]) {
                return index;
            }
        }
    }

    insert(array, element) {
        array.push(element);
        return array;
    }

    insertToHead(array, element) {
        array.unshift(element);
        return array;
    }

    remove(array, element) {
        const index = this.search(array, element);
        array.splice(index, 1);
        return array;
    }

};
module.exports = {Array};

/*let dsArray = new DSArray();
let array = [1, 2, 3];
console.log(dsArray.insert(array, 4)); // => [ 1, 2, 3, 4 ]
console.log(dsArray.insertToHead(array, 0)); // => [ 0, 1, 2, 3, 4 ]
console.log(dsArray.remove(array, 1)); // => [ 0, 2, 3 ]
console.log(dsArray.access(array, 1)); // => 2
console.log(dsArray.search(array, 3)); // => 2*/
