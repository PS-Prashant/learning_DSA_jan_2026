/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number} no of lement in aaray which has not matched with val
 */

function removeElements(nums, val) {

    let x = 0;

    for ( let i=0; i<nums.length; i++ ) {
        if( nums[i] != val ) {
            nums[x] = nums[i];
            x = x+1;
        }
    }

    console.log(nums)

    return x
    
}

console.log(removeElements( [3,2,1,5,3,4,8,3], 3 ))
console.log(removeElements( [3,2,8,3], 3 ))