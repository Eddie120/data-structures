function rotate(nums, k) {  // S: O(n) T:O(n)
    const start = 0
    let end = nums.length - k

    const partial = nums.slice(start, end) // O(n)
    let size = nums.length - 1
    while(size >= end) {
        partial.unshift(nums[size])
        size--         
    }

    return partial
}

// console.log(rotate([1,2,3,4,5,6,7], 3))

function rotateInPlace(nums, k) {  // S: O(1) T:O(n)
    const start = 0
    let end = nums.length - k
    let size = nums.length - 1
    // console.log(end)
    // console.log(size)
    let num = 0
    while(size >= end) {
        num = nums[size]
        console.log(num)
        nums.pop()
        console.log(nums)
        console.log(siz)
        size--         
    }

    return nums
}

console.log(rotateInPlace([1,2,3,4,5,6,7], 3))