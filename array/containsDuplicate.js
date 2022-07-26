// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct
function containsDuplicate(nums) {
    const hashTable = {}
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (!hashTable[num]) {
            hashTable[num] = true
        } else {
            return true
        }
    }

    return false
}

console.log(containsDuplicate([1,2,3,4]))