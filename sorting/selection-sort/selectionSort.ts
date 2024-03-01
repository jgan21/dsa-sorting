/** Sort in-place and return sorted array. */

function selectionSort(nums: number[]): number[] {
  // let smallestElement = Math.min(...nums);
  let smallestElementIndex = 0
  for (let i = 0; i < nums.length; i++){
    if (nums[i] < nums[smallestElementIndex]){
      smallestElementIndex = i
    }

  }
  return nums;
}

let oldValue = nums[smallestElement]
nums[smallestElement] = nums[i]
nums[i] = oldValue

export { selectionSort };