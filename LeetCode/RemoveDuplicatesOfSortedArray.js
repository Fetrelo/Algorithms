/*
* @author Felipe Pulido
* @since 2020/10/28
* Problem URL: https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/727/
*/

var removeDuplicates = function(nums) {
    let i = 0;
    for(let j = 1; j < nums.length; j++) {
        if(nums[i] != nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    for(i++;i < nums.length;) {
        nums.pop();
    }
    return nums.length;
};