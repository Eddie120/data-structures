function moveZeroes (nums) {
    if (nums.length == 1) return nums

    let count = 0
    for (let i = 0; i < nums.length; i++) {
       const num = nums[i]
        if (num != 0) {
            nums[count++] = num
        }
    }

    while (count < nums.length) {
        nums[count] = 0
        count++
    }

    return nums
}

console.log(moveZeroes([0,1,0,3,12]))// S: O(1) T: O(n)