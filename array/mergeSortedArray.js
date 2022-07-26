function mergeSortedArrays(array1, array2) {
    if (!array1.length) {
        return array2
    }

    if (!array2.length) {
        return array1
    }

    const sortedArray = []
    let firtsPointer = 0
    let secondPointer = 0
    while(firtsPointer < array1.length || secondPointer < array2.length) {
        const a = array1[firtsPointer]
        const b = array2[secondPointer]

        if (!b || a < b) {
            sortedArray.push(a)
            firtsPointer++
        } else {
            sortedArray.push(b)
            secondPointer++
        }
    }

    return sortedArray
}

console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]))