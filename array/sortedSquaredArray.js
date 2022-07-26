function sortedSquaredArray(array) {
    // iterate over array
    // calculate square by each element
    // sort output
    const sortedSquared = new Array(array.length).fill(0)
    for (let index = 0; index < array.length; index++) {
        const num = array[index]
        sortedSquared[index] = num * num
    }

    return sortedSquared.sort((a, b) => a - b)
}
// console.log(sortedSquaredArray([-4,1,2,3,5,6,8,9]))// 1,4,9,16,25,36,64,81 S: O(n), T: O(nlogn)

// define 2 pointers
// one at the beginner of the array and other at the end of the array
// compair absolute value for each pointer
// if pointer a is greater than pointer b then put a at the end of array
// update index control --
// keep going up to have full ordered array
function sortedSquaredArrayLinealSolution(array) {
    const sortedSquared = new Array(array.length).fill(0)
    let firstPointer = 0
    let secondPointer = array.length - 1

    for (let index = array.length - 1; index >= 0; index--) {
        const smallValue = array[firstPointer]
        const higthValue = array[secondPointer]
        
        if (Math.abs(smallValue) > Math.abs(higthValue)) {
            sortedSquared[index] = smallValue * smallValue
            firstPointer++
        } else {
            sortedSquared[index] = higthValue * higthValue
            secondPointer--
        }
    }

    console.log(sortedSquared)
}

sortedSquaredArrayLinealSolution([-4,1,2,3,5,6,8,9])