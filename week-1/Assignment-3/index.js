function max(nums) {
    let lastnum = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]>lastnum) {
            lastnum = nums[i]
        }
    }
    return lastnum
}

function findPosition(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]===target) {
            return i
        }
    }
    return -1
}

console.log(max([3,1,4,5]));
console.log(findPosition([1,2,3], 3));
