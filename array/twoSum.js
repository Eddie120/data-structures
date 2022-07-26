function twoNumberSum(array, targetSum) {
    // Write your code here.
      const table = {}
      for (let i = 0; i < array.length; i++) {
          const num = array[i]
          const complement = targetSum - num
          if (table[complement]) {
              return [num, complement]
          }
          
          table[num] = true
      }
      
      return []
  }
  
  console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
  